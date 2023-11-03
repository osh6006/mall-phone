import React from "react";
import Avatar from "../ui/avatar";

interface CommentProps {}

const Comment: React.FC<CommentProps> = ({}) => {
  return (
    <>
      <div className="">
        <Avatar
          src="/images/avatar.jpg"
          title="갤럭시 사용자"
          date="2020.02.01"
        />
        {/* star rating*/}
        <p className="mt-2">이전 버전보다 나쁘지 않은 것 같아요 ㅎㅎ</p>
      </div>
      <hr />
    </>
  );
};

export default Comment;
