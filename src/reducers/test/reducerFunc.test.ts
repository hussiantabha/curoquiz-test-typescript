import { reducerFunc, initalState, Statetype } from "../quizReducer";
describe("Reducer Func", () => {
  test("addquiz1Data", () => {
    const endState = {
      quiz1Data: [
        {
          category: "Science: Gadgets",
          type: "multiple",
          difficulty: "medium",
          question:
            "What are the base station trackers used for the HTC Vive called?",
          correct_answer: "Lighthouse",
          incorrect_answers: ["Motion", "Constellation ", "Trackers"],
        },
      ],
      gadgetQuizAnswers: [],
      filmQuizData: [],
      filmQuizAnswers: [],
      sportsQuizData: [],
      sportsQuizAnswers: [],
      userLoggedIn: false,
    };
    const state = reducerFunc(
      {
        quiz1Data: [],
        gadgetQuizAnswers: [],
        filmQuizData: [],
        filmQuizAnswers: [],
        sportsQuizData: [],
        sportsQuizAnswers: [],
        userLoggedIn: false,
      },
      {
        type: "addquiz1Data",
        payload: {
          value: [
            {
              category: "Science: Gadgets",
              type: "multiple",
              difficulty: "medium",
              question:
                "What are the base station trackers used for the HTC Vive called?",
              correct_answer: "Lighthouse",
              incorrect_answers: ["Motion", "Constellation ", "Trackers"],
            },
          ],
        },
      }
    );
    expect(state.quiz1Data).toEqual(endState.quiz1Data);
  });
  test("gadgetQuizAnswer", () => {
    const action = {
      type: "gadgetQuizAnswers",
      payload: {
        value: ["Lighthouse"],
      },
    };
    const endState = {
      quiz1Data: [],
      gadgetQuizAnswers: ["Lighthouse"],
      filmQuizData: [],
      filmQuizAnswers: [],
      sportsQuizData: [],
      sportsQuizAnswers: [],
      userLoggedIn: false,
    };
    const state = reducerFunc(
      {
        quiz1Data: [],
        gadgetQuizAnswers: [],
        filmQuizData: [],
        filmQuizAnswers: [],
        sportsQuizData: [],
        sportsQuizAnswers: [],
        userLoggedIn: false,
      },
      {
        type: "gadgetQuizAnswers",
        payload: {
          value: ["Lighthouse"],
        },
      }
    );
    expect(state).toEqual(endState);
  });
  test("addFilmQuizData", () => {
    const action = {
      type: "addFilmQuizData",
      payload: {
        value: [
          {
            category: "Entertainment: Film",
            type: "multiple",
            difficulty: "medium",
            question:
              "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
            correct_answer: "The Vikings ",
            incorrect_answers: [
              "The Long Ships",
              "Prince Valiant",
              "Spartacus",
            ],
          },
        ],
      },
    };
    const endState = {
      quiz1Data: [],
      gadgetQuizAnswers: [],
      filmQuizData: [
        {
          category: "Entertainment: Film",
          type: "multiple",
          difficulty: "medium",
          question:
            "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
          correct_answer: "The Vikings ",
          incorrect_answers: ["The Long Ships", "Prince Valiant", "Spartacus"],
        },
      ],
      filmQuizAnswers: [],
      sportsQuizData: [],
      sportsQuizAnswers: [],
      userLoggedIn: false,
    };
    const state = reducerFunc(
      {
        quiz1Data: [],
        gadgetQuizAnswers: [],
        filmQuizData: [],
        filmQuizAnswers: [],
        sportsQuizData: [],
        sportsQuizAnswers: [],
        userLoggedIn: false,
      },
      {
        type: "addFilmQuizData",
        payload: {
          value: [
            {
              category: "Entertainment: Film",
              type: "multiple",
              difficulty: "medium",
              question:
                "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
              correct_answer: "The Vikings ",
              incorrect_answers: [
                "The Long Ships",
                "Prince Valiant",
                "Spartacus",
              ],
            },
          ],
        },
      }
    );
    expect(state).toEqual(endState);
  });
  test("addSportsQuizData", () => {
    const action = {
      type: "addSportsQuizData",
      payload: {
        value: [
          {
            category: "Sports",
            type: "multiple",
            difficulty: "hard",
            question:
              "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
            correct_answer: "Nine",
            incorrect_answers: ["Ten", "Seven", "Eight"],
          },
        ],
      },
    };
    const endState = {
      quiz1Data: [],
      gadgetQuizAnswers: [],
      filmQuizData: [],
      filmQuizAnswers: [],
      sportsQuizData: [
        {
          category: "Sports",
          type: "multiple",
          difficulty: "hard",
          question:
            "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
          correct_answer: "Nine",
          incorrect_answers: ["Ten", "Seven", "Eight"],
        },
      ],
      sportsQuizAnswers: [],
      userLoggedIn: false,
    };
    const state = reducerFunc(
      {
        quiz1Data: [],
        gadgetQuizAnswers: [],
        filmQuizData: [],
        filmQuizAnswers: [],
        sportsQuizData: [],
        sportsQuizAnswers: [],
        userLoggedIn: false,
      },
      {
        type: "addSportsQuizData",
        payload: {
          value: [
            {
              category: "Sports",
              type: "multiple",
              difficulty: "hard",
              question:
                "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
              correct_answer: "Nine",
              incorrect_answers: ["Ten", "Seven", "Eight"],
            },
          ],
        },
      }
    );
    expect(state).toEqual(endState);
  });
  test("filmQuizAnswers", () => {
    const action = {
      type: "filmQuizAnswers",
      payload: {
        value: ["The Vikings"],
      },
    };
    const endState = {
      quiz1Data: [],
      gadgetQuizAnswers: [],
      filmQuizData: [],
      filmQuizAnswers: ["The Vikings"],
      sportsQuizData: [],
      sportsQuizAnswers: [],
      userLoggedIn: false,
    };
    const state = reducerFunc(
      {
        quiz1Data: [],
        gadgetQuizAnswers: [],
        filmQuizData: [],
        filmQuizAnswers: [],
        sportsQuizData: [],
        sportsQuizAnswers: [],
        userLoggedIn: false,
      },
      {
        type: "filmQuizAnswers",
        payload: {
          value: ["The Vikings"],
        },
      }
    );
    expect(state).toEqual(endState);
  });
  test("sportsQuizAnswers", () => {
    const action = {
      type: "sportsQuizAnswers",
      payload: {
        value: ["Nine"],
      },
    };
    const endState = {
      quiz1Data: [],
      gadgetQuizAnswers: [],
      filmQuizData: [],
      filmQuizAnswers: [],
      sportsQuizData: [],
      sportsQuizAnswers: ["Nine"],
      userLoggedIn: false,
    };
    const state = reducerFunc(
      {
        quiz1Data: [],
        gadgetQuizAnswers: [],
        filmQuizData: [],
        filmQuizAnswers: [],
        sportsQuizData: [],
        sportsQuizAnswers: [],
        userLoggedIn: false,
      },
      {
        type: "sportsQuizAnswers",
        payload: {
          value: ["Nine"],
        },
      }
    );
    expect(state).toEqual(endState);
  });
  test("userLoggedIn", () => {
    const action = {
      type: "userLoggedIn",
      payload: {
        value: true,
      },
    };
    const endState = {
      quiz1Data: [],
      gadgetQuizAnswers: [],
      filmQuizData: [],
      filmQuizAnswers: [],
      sportsQuizData: [],
      sportsQuizAnswers: [],
      userLoggedIn: true,
    };
    const state = reducerFunc(
      {
        quiz1Data: [],
        gadgetQuizAnswers: [],
        filmQuizData: [],
        filmQuizAnswers: [],
        sportsQuizData: [],
        sportsQuizAnswers: [],
        userLoggedIn: false,
      },
      {
        type: "userLoggedIn",
        payload: {
          value: true,
        },
      }
    );
    expect(state).toEqual(endState);
  });
});
export {};
