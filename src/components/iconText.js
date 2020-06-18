import React from 'react';
import Button from "./button";
import "scss/iconText.scss"

export default function iconText() {
  return (
    <div>
      <Button className="brand-text-icon" href="" type="link">
        Stay<span className="text-blue-zodiac">cation.</span>
      </Button>
    </div>
  );
}
