import portrait from "../images/portrait.jpg";
import React from "react";

export class Hero extends React.Component {
  render() {
    return (
      <header class="flex flex-wrap justify-center">
        <picture class=" sm:w-1/2 px-4 mt-12">
          <img
            src={portrait}
            alt="..."
            class="shadow rounded-3xl max-w-full h-auto align-middle bg-center opacity-90"
          />
        </picture>
      </header>
    );
  }
}
