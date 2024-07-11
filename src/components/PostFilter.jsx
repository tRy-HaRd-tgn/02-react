import React from "react";
import { useState, useMemo } from "react";
import MySelect from "../UI/select/MySelect";
function PostFilter({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: "15px" , marginTop:'15px'}}>
      <input
        style={{ marginRight: "15px" }}
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        type="text"
        placeholder="Поиск..."
      ></input>
      <MySelect
        value={filter.sort}
        onChange={(selecterSort) =>
          setFilter({ ...filter, sort: selecterSort })
        }
        defaultValue="сортировка по"
        options={[
          {
            value: "title",
            name: "по названию",
          },
          {
            value: "body",
            name: "по описанию",
          },
        ]}
      ></MySelect>
    </div>
  );
}
export default PostFilter;
