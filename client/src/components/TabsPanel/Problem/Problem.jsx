import React from "react";
import "./Problem.css";

const Problem = () => {
  return (
    <div className="problem-root">
      <div className="content">
        <p>
          The Leetcode file system keeps a log each time some user performs a
          change folder operation. The operations are described below: "../" :
          Move to the parent folder of the current folder. (If you are already
          in the main folder, remain in the same folder). "./" : Remain in the
          same folder. "x/" : Move to the child folder named x (This folder is
          guaranteed to always exist). You are given a list of strings logs
          where logs[i] is the operation performed by the user at the ith step.
          The file system starts in the main folder, then the operations in logs
          are performed. Return the minimum number of operations needed to go
          back to the main folder after the change folder operations.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod
          iure deserunt eos. Ratione, similique. Eum numquam officia libero,
          odio quod, esse consectetur ad dolore ab molestias ducimus explicabo
          magnam? Atque aliquid aut quibusdam ratione voluptate cupiditate
          ducimus ipsam cumque voluptatibus dolores, fugit vitae tempora fuga
          quaerat autem mollitia soluta! Illum maiores exercitationem commodi at
          officia delectus alias quae. Numquam sunt vero perferendis.
        </p>
      </div>
    </div>
  );
};

export default Problem;
