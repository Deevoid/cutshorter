import React from "react";
import { Button } from "../../Button/Button";
import { CardSelect } from "../../CardSelect/CardSelect";
import { FormHeader } from "../../FormHeader/FormHeader";

export const TemplateThree = ({ onChange }) => {
  return (
    <div>
      <div className=" mb-12">
        <FormHeader
          title="How are you planning to use Eden?"
          subTitle="We'll streamline your setup experience accordingly."
        />
      </div>
      <div className="p-4 md:p-0 md:max-w-[350px] w-full mx-auto">
        <CardSelect />
        <Button
          text="Create Workspace"
          onClick={() => onChange()}
          type="submit"
        />
      </div>
    </div>
  );
};
