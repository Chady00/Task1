import React, { useState } from "react";
import {
  CloseOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input, Space } from "antd";
import "../Styles/QuestionAdder.css";
import MyDropDown from "./MyDropDown";
import type { Question } from "../types/type";

interface QuestionProp {
  AddQuestion: () => void;
  rmQuestion: (id: number) => void;
  updateQuestion: (id: number, question: Question) => void;
}

const QuestionAdder: React.FC<QuestionProp> = ({
  AddQuestion,
  rmQuestion,
  updateQuestion,
}) => {
  const [selectedType, setSelectedType] = useState<string>("paragraph");

  const UpdateQuestionSchema = (label: string, id: number) => {
    // create new object with the new label
    const newQuestion: Question = {
      category: "Personal Info",
      questionType: label,
      questionContent: "",
    };
    switch (label) {
      case "Multiple Choice":
        newQuestion.choices = [];
        newQuestion.maxChoiceAllowed = 0;
        newQuestion.checkboxText = "";
        break;
      case "DropDown":
        newQuestion.choices = [];
        newQuestion.maxChoiceAllowed = 0;
        break;
      case "Yes/No":
        newQuestion.checkboxText = "";
        break;
      case "Video Question":
        newQuestion.fourMinuteQ = "";
        newQuestion.twoMinuteQ = "";
        newQuestion.achievements = "";
        newQuestion.maxVideoDuration = 0;
        newQuestion.secMin = 0;
        break;
    }
    updateQuestion(id, newQuestion);
  };

  // get selected Type from Mydropdown
  const updateType = (type: string) => {
    setSelectedType(type);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form style={{ marginRight: "30px" }} onValuesChange={onFinish}>
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div style={{ display: "flex", rowGap: 12, flexDirection: "column" }}>
            {fields.map((field) => (
              <Card
                size="default"
                key={field.key}
                style={{
                  marginBottom: "10px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  border: "none",
                }}
              >
                <div style={{ flex: 1, marginBottom: "60px" }}>
                  <Space
                    direction="vertical"
                    size={75}
                    style={{ flexWrap: "wrap" }}
                  >
                    <Form.Item
                      label={<p className="custom-label">Type</p>}
                      name={[field.name, "type"]}
                      style={{ marginBottom: "20px" }}
                    >
                      <MyDropDown
                        UpdateQuestionSchema={UpdateQuestionSchema}
                        id={field.name + 1}
                        updateType={updateType}
                      />
                    </Form.Item>

                    <Form.Item label={<p className="custom-label">Question</p>}>
                      <Input
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault(); // Prevent the default Enter key behavior
                          }
                        }}
                        placeholder="Type here"
                        className="TextArea"
                      />
                    </Form.Item>

                    {/*                Additional Items                */}
                    {selectedType === "Multiple Choice" ? (
                      <>
                        <Card
                          size="default"
                          style={{
                            color: "black",
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            marginBottom: "5px",
                            border: "none  ",
                          }}
                        >
                          <div style={{ flex: 1, marginBottom: "20px" }}>
                            <Space direction="vertical" size={40}>
                              <Form.Item
                                label={<p className="custom-label">Choice</p>}
                                name={[field.name, "choices"]}
                              >
                                <UnorderedListOutlined
                                  style={{
                                    fontSize: "24px",
                                    cursor: "pointer",
                                  }}
                                />
                                <Input
                                  onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                      event.preventDefault(); // Prevent the default Enter key behavior
                                    }
                                  }}
                                  placeholder="Type here"
                                  className="choice-TextArea"
                                />
                                <PlusOutlined
                                  style={{
                                    fontSize: "24px",
                                    cursor: "pointer",
                                  }}
                                />
                              </Form.Item>
                            </Space>
                          </div>
                        </Card>
                        <Form.Item
                          label={
                            <p className="custom-label">Max Choice Allowed</p>
                          }
                          name={[field.name, "choices"]}
                        >
                          <Input
                            onKeyPress={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault(); // Prevent the default Enter key behavior
                              }
                            }}
                            placeholder="Enter number of choice allowed here"
                            className="TextArea"
                          />
                        </Form.Item>
                      </>
                    ) : null}

                    <Form.Item>
                      <div className="button-container">
                        <Button
                          type="dashed"
                          onClick={() => {
                            remove(field.name);
                            rmQuestion(field.name);
                          }}
                          className="adder-button-delete"
                        >
                          <CloseOutlined style={{ fontSize: "24px" }} />
                          <b> Delete Question</b>
                        </Button>

                        <Button
                          type="primary"
                          onClick={() => {
                            // Call a function to handle saving the data
                            // handleSaveData(field.name); // You can pass the field name or any other identifier if needed
                          }}
                          className="save-button"
                        >
                          Save
                        </Button>
                      </div>
                    </Form.Item>
                  </Space>
                </div>
              </Card>
            ))}

            <Button
              type="dashed"
              onClick={() => {
                add();
                AddQuestion();
              }}
              block
              className="adder-button"
            >
              <PlusOutlined style={{ fontSize: "24px", marginRight: "10px" }} />
              <b> Add Question</b>
            </Button>
          </div>
        )}
      </Form.List>
    </Form>
  );
};

export default QuestionAdder;
