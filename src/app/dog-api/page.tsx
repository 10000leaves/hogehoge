"use client";

import React, { useEffect, useState } from "react";

import dogList from "./dogList.json";

interface ImageProps {
  src: string;
}

interface FormProps {
  onFormSubmit: (breed: string) => void;
  data: { value: string; name: string }[];
}

async function fetchImages(breed: string): Promise<string[]> {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/30`
  );
  const data = await response.json();
  return data.message;
}

function Image(props: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative mb-2">
      <div className="inline-block">
        <figure className="m-0 p-0">
          <img
            onClick={handleOpen}
            src={props.src}
            alt="cute dog!"
            className="w-full h-auto cursor-pointer"
          />
          {isOpen && (
            <div
              onClick={handleClose}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            >
              <div className="max-w-lg w-full p-4 bg-white rounded-lg shadow-lg">
                <img
                  src={props.src}
                  alt="cute dog!"
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props: { urls: string[] | null }) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns-2 md:columns-3 lg:columns-4">
      {urls.map((url) => {
        return (
          <div key={url}>
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Form(props: FormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { breed } = event.currentTarget.elements as typeof event.currentTarget.elements & {
      breed: { value: string };
    };
    props.onFormSubmit(breed.value);
  }

  return (
    <div className="flex flex-col items-center border-b border-teal-500 py-2 mb-4">
      <form className="flex" onSubmit={handleSubmit}>
        <div className="relative w-64 mx-4">
          <select
            name="breed"
            defaultValue="shiba"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
          >
            {props.data.map((d, index) => (
              <option value={d.value} key={index}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <button className="mx-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Reload
        </button>
      </form>
    </div>
  );
}

const DogGallery = () => {
  const [urls, setUrls] = useState<string[] | null>(null);
  const [breed, setBreed] = useState<string>("shiba");

  useEffect(() => {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }, [breed]);

  function reloadImages(breed: string) {
    setBreed(breed);
  }

  return (
    <div className="container px-5 py-24 mx-auto">
      <p>犬の画像を見て癒される</p>
      <div className="flex flex-col text-center w-full mb-10">
          <Form onFormSubmit={reloadImages} data={dogList} />
          <Gallery urls={urls} />
      </div>
      <p>Dog images are retrieved from Dog API</p>
      <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
      </p>
    </div>
  );
};

export default DogGallery;
