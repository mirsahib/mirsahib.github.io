import React from "react";

function Tab(props) {
  return (
    <li class="list-inline-item">
      <a class={props.class} href={props.link} data-filter={props.tag}>
        {props.title}
      </a>
    </li>
  );
}

export default Tab;
