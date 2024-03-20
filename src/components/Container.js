import React from "react";
import Input from "./Input";
import { Phone } from "@mui/icons-material";
import { Lock } from "@mui/icons-material";
import Footer from "./Footer";

export default function Container() {
  return (
    <div className="container">
      <h1 className="container__header">Input</h1>
      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Input />"}</p>
          <Input />
        </div>
        <div className="container__row__item">
          <p className="hover">{"&:hover"}</p>
          <Input hover />
        </div>
        <div className="container__row__item">
          <p className="hover">{"&:focus"}</p>
          <Input focus />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Input error />"}</p>
          <Input error />
        </div>
        <div className="container__row__item">
          <p className="hover">{"&:hover"}</p>
          <Input error hover />
        </div>
        <div className="container__row__item">
          <p className="hover">{"&:focus"}</p>
          <Input error focus />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Input disabled />"}</p>
          <Input disabled />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Input helperText="Some interesting text" />'}</p>
          <Input helperText="Some interesting text" />
        </div>
        <div className="container__row__item">
          <p>{'<Input helperText="Some interesting text" error />'}</p>
          <Input helperText="Some interesting text" error />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Input startIcon />"}</p>
          <Input startIcon={<Phone />} />
        </div>
        <div className="container__row__item">
          <p>{"<Input endIcon />"}</p>
          <Input endIcon={<Lock />} />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Input value="Text" />'}</p>
          <Input value="Text" />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Input size="sm" />'}</p>
          <Input size="sm" />
        </div>
        <div className="container__row__item">
          <p>{'<Input size="md" />'}</p>
          <Input size="md" />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Input fullWidth />"}</p>
          <Input fullWidth value="Text" />
        </div>
      </div>

      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Input multiline row="4" />'}</p>
          <Input multiline row="4" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
