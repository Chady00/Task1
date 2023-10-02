import React from "react";
import { Card, Space } from "antd";
import UploadCard from "./UploadCard";
import MyForm from "./MyForm";
import "../Styles/CardsStyle.css";
import type { FormItem } from "../types/type";
import { useState, useEffect } from "react";
import type { Question } from "../types/type";
import type { DataSchema } from "../types/type";

const cardHeadStyle = {
  backgroundColor: "#D0F7FA",
  border: 0,
  fontSize: 25,
  lineHeight: 2,
  height: 75,
  fontWeight: "bold",
  borderRadius: "20px 20px 0px 0px",
};

const PersonalInfo: FormItem[] = [
  {
    label: "First Name",
    name: "FirstName",
    type: "simple",
  },
  {
    label: "Last Name",
    name: "LastName",
    type: "simple",
  },
  {
    label: "Email",
    name: "Email",
  },
  {
    label: "Phone",
    name: "Phone",
    type: "complex",
  },
  {
    label: "Nationality",
    name: "Nationality",
    type: "complex",
  },
  {
    label: "Current Residence",
    name: "CurrentResidence",
    type: "complex",
  },
  {
    label: "ID Number",
    name: "IdNumber",
    type: "complex",
  },
  // do one for Date of birth and gender
  {
    label: "Date of Birth",
    name: "DateOfBirth",
    type: "complex",
  },
  {
    label: "Gender",
    name: "Gender",
    type: "complex",
    Noinput: true,
  },
];
//same but for Profile
const Profile: FormItem[] = [
  {
    label: "Education",
    name: "Education",
    type: "complex",
    checkboxText: "Mandatory",
  },
  {
    label: "Experience",
    name: "Experience",
    type: "complex",
    checkboxText: "Mandatory",
  },
  {
    label: "Resume",
    name: "Resume",
    type: "complex",
    checkboxText: "Mandatory",
    Noinput: true,
  },
];

const Cards: React.FC = () => {
  const [data, setData] = useState<DataSchema>();
  const [pInfoQuestion, setPInfoQuestion] = useState<Question[]>([]);
  const [profileQuestion, setProfileQuestion] = useState<Question[]>([]);
  const [additionalQuestion, setAdditionalQuestion] = useState<Question[]>([]);

  //use effect to print pInfoQuestion
  useEffect(() => {
    console.log(pInfoQuestion);
  }, [pInfoQuestion]);

  const AddPersonalInfoQuestion = () => {
    setPInfoQuestion([
      ...pInfoQuestion,
      {
        id: pInfoQuestion.length + 1,
        category: "Personal Info",
        questionType: "paragraph",
        questionContent: "",
      },
    ]);
    console.log("added");
  };

  // remove personalinfo question by id
  const removePersonalInfoQuestion = (id: number) => {
    console.log(id);
    setPInfoQuestion(
      pInfoQuestion.filter((question) => question.id !== id + 1)
    );
  };

  // update an existing question
  const updatePersonalInfoQuestion = (id: number, question: Question) => {
    // console.log("I want to update personal question of id" + id);
    // console.log("and the question is : " + question.questionType);

    // keep the same id and update the rest of the question
    const newQuestion: Question = {
      id: id,
      ...question,
    };
    //set the new question of the same id
    setPInfoQuestion(
      pInfoQuestion.map((question) => {
        if (question.id === id) {
          return newQuestion;
        }
        return question;
      })
    );
  };

  //////////////////////////////////

  const AddProfileQuestion = () => {
    setProfileQuestion([
      ...profileQuestion,
      {
        id: profileQuestion.length + 1,
        category: "Profile",
        questionType: "paragraph",
        questionContent: "",
      },
    ]);
  };
  const AddAdditionalQuestion = () => {
    setAdditionalQuestion([
      ...additionalQuestion,
      {
        id: additionalQuestion.length + 1,
        category: "Additional",
        questionType: "paragraph",
        questionContent: "",
      },
    ]);
  };

  return (
    <Space direction="vertical" size="large" className="cards-container">
      <Card
        title="Upload cover image"
        size="default"
        headStyle={cardHeadStyle}
        bodyStyle={{ padding: "50px" }}
        className="card-content"
      >
        <UploadCard />
      </Card>

      <Card
        title="Personal information"
        size="default"
        headStyle={cardHeadStyle}
        className="card-content"
      >
        <MyForm
          formData={PersonalInfo}
          AddQuestion={AddPersonalInfoQuestion}
          rmQuestion={removePersonalInfoQuestion}
          updateQuestion={updatePersonalInfoQuestion}
        />
      </Card>
      <Card
        title="Profile"
        size="default"
        headStyle={cardHeadStyle}
        className="card-content"
      >
        <MyForm
          formData={Profile}
          AddQuestion={AddProfileQuestion}
          rmQuestion={removePersonalInfoQuestion}
          updateQuestion={updatePersonalInfoQuestion}
        />
      </Card>
      <Card
        title="Additional questions"
        size="default"
        headStyle={cardHeadStyle}
        className="card-content"
      >
        <MyForm
          formData={[]}
          AddQuestion={AddProfileQuestion}
          rmQuestion={removePersonalInfoQuestion}
          updateQuestion={updatePersonalInfoQuestion}
        />
      </Card>
    </Space>
  );
};

export default Cards;
