function getQuestions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Response(
          JSON.stringify({
            questions: [
              {
                text: "Who is the Current President of The United States of America?",
                options: [
                  {
                    id: 1,
                    text: "Barack Obama",
                    isCorrect: false,
                  },
                  {
                    id: 2,
                    text: "Joe Biden",
                    isCorrect: true,
                  },
                  {
                    id: 3,
                    text: "Donald Trump",
                    isCorrect: false,
                  },
                  {
                    id: 4,
                    text: "Benjamin Franklin",
                    isCorrect: false,
                  },
                ],
              },
              {
                text: "Which is the highest peak in the world?",
                options: [
                  {
                    id: 1,
                    text: "Mount K2/ Godwin Austin",
                    isCorrect: false,
                  },
                  {
                    id: 2,
                    text: "Kanchenjunga",
                    isCorrect: false,
                  },
                  {
                    id: 3,
                    text: "Mount Everest",
                    isCorrect: true,
                  },
                  {
                    id: 4,
                    text: "Mount Fiji",
                    isCorrect: false,
                  },
                ],
              },
            ],
          })
        )
      );
    });
  }, 500);
}

module.exports = { getQuestions };
