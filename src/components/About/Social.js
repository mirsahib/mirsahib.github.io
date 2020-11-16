import React from "react";

function Social(props) {
  return (
    <li class="list-inline-item">
      <a href={props.link}>
        <i class={props.icon}></i>
      </a>
    </li>
  );
}

export default Social;
