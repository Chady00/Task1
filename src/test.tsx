import { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);

  const requestData = {
    data: {
      id: "123e4567-e89b-12d3-a456-426655440000",
      type: "application-form",
      attributes: {
        coverImage: "http://testtttttt.com",
        personalInformation: {
          firstName: {
            internalUse: true,
            show: true,
          },
          lastName: {
            internalUse: false,
            show: true,
          },
          emailId: {
            internalUse: false,
            show: true,
          },
          phoneNumber: {
            internalUse: false,
            show: true,
          },
          nationality: {
            internalUse: false,
            show: true,
          },
          currentResidence: {
            internalUse: false,
            show: true,
          },
          idNumber: {
            internalUse: false,
            show: true,
          },
          dateOfBirth: {
            internalUse: false,
            show: true,
          },
          gender: {
            internalUse: false,
            show: true,
          },
          personalQuestions: [
            // Array of personal questions
            {
              id: "123e4567-e89b-12d3-a456-426655440001", // Corrected to a valid UUID string
              type: "ShortAnswer", // Corrected to a valid question type
              question: "string",
              choices: [], // Array of strings (if applicable)
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
            // Additional personal questions
          ],
        },
        profile: {
          education: {
            mandatory: false,
            show: true,
          },
          experience: {
            mandatory: false,
            show: true,
          },
          resume: {
            mandatory: false,
            show: true,
          },
          profileQuestions: [
            // Array of profile questions
            {
              id: "123e4567-e89b-12d3-a456-426655440002", // Corrected to a valid UUID string
              type: "ShortAnswer", // Corrected to a valid question type
              question: "string",
              choices: [], // Array of strings (if applicable)
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
            // Additional profile questions
          ],
        },
        customisedQuestions: [
          // Array of customised questions
          {
            id: "123e4567-e89b-12d3-a456-426655440003", // Corrected to a valid UUID string
            type: "ShortAnswer", // Corrected to a valid question type
            question: "string",
            choices: [], // Array of strings (if applicable)
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
          // Additional customised questions
        ],
      },
    },
  };

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:4010/api/2/programs/123e4567-e89b-12d3-a456-426655440000/application-form`;

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("PUT request response:", response);
      })
      .then(() => {
        const getApiUrl = `http://127.0.0.1:4010/api/1.0/programs/123e4567-e89b-12d3-a456-426655440000/application-form`;

        fetch(getApiUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log("GET request response:", data);
            setData(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [trigger]);

  return (
    <div>
      {/* Render the data here */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      <button onClick={() => setTrigger(!trigger)}>Get new Data</button>
    </div>
  );
};

export default Test;
