import * as React from "react";
import Select, { ValueType } from "react-select";
import schools from "../data/SchoolExpenses.json";
import { ISchool } from "src/models/Data.js";
import { useHistory } from "react-router-dom";
import { Card, CardContent } from "./Card";
import "./Search.scss";

interface IOption {
  value: string;
  label: string;
}
const options: IOption[] = schools.map((school: ISchool) => ({
  value: school.id,
  label: school.name
}));

function isOption(option: ValueType<IOption>): option is IOption {
  return Boolean(option) && (option as IOption).value !== undefined;
}

function Search() {
  const history = useHistory();

  function selectSchool(option: ValueType<IOption>) {
    if (isOption(option)) {
      history.push(`?id=${option.value}`);
    }
  }

  return (
    <div className="search">
      <Card>
        <CardContent>
          <label>
            Find your school:
            <Select options={options} onChange={selectSchool} />
          </label>
        </CardContent>
      </Card>
    </div>
  );
}

export default Search;
