import axios from "axios";
import {
  getQuiz1DataUtil,
  getFilmQuizDataUtil,
  getSportsQuizDataUtil,
} from "../util";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const gadgetQuiz = {
  data: {
    response_code: 10,
    results: [
      {
        category: "Science: Gadgets",
        type: "multiple",
        difficulty: "medium",
        question:
          "What are the base station trackers used for the HTC Vive called?",
        correct_answer: "Lighthouse",
        incorrect_answers: ["Motion", "Constellation ", "Trackers"],
      },
      {
        category: "Science: Gadgets",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which company designed the &quot;Betamax&quot; video cassette format?",
        correct_answer: "Sony",
        incorrect_answers: ["Panasonic", "LG", "Fujitsu"],
      },
      {
        category: "Science: Gadgets",
        type: "multiple",
        difficulty: "medium",
        question:
          "In what year was the Oculus Rift revealed to the public through a Kickstarter campaign?",
        correct_answer: "2012",
        incorrect_answers: ["2010", "2011", "2013"],
      },
      {
        category: "Science: Gadgets",
        type: "multiple",
        difficulty: "medium",
        question: "Which company developed the Hololens?",
        correct_answer: "Microsoft",
        incorrect_answers: ["HTC", "Oculus", "Tobii"],
      },
      {
        category: "Science: Gadgets",
        type: "multiple",
        difficulty: "medium",
        question:
          "Mobile hardware and software company &quot;Blackberry Limited&quot; was founded in which country?",
        correct_answer: "Canada",
        incorrect_answers: [
          "Norway",
          "United States of America",
          "United Kingdom",
        ],
      },
      {
        category: "Science: Gadgets",
        type: "multiple",
        difficulty: "medium",
        question:
          "What is the most significant side venture the popular firearms company, Remington, has pursued?",
        correct_answer: "Typewriters",
        incorrect_answers: ["Blenders", "Ceiling Fans", "Door Knobs"],
      },
    ],
  },
  status: 200,
};
const filmQuiz = {
  data: {
    response_code: 0,
    results: [
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which of the following is NOT a quote from the 1942 film Casablanca? ",
        correct_answer:
          "&quot;Frankly, my dear, I don&#039;t give a damn.&quot;",
        incorrect_answers: [
          "&quot;Here&#039;s lookin&#039; at you, kid.&quot;",
          "&ldquo;Of all the gin joints, in all the towns, in all the world, she walks into mine&hellip;&rdquo;",
          "&quot;Round up the usual suspects.&quot;",
        ],
      },
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
        correct_answer: "The Vikings ",
        incorrect_answers: ["The Long Ships", "Prince Valiant", "Spartacus"],
      },
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "medium",
        question:
          "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
        correct_answer: "Chicago",
        incorrect_answers: ["Dreamgirls", "Cabaret", "All That Jazz"],
      },
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "medium",
        question:
          "Who performed the opening theme song for the James Bond 007 movie &quot;Goldfinger&quot;?",
        correct_answer: "Shirley Basey",
        incorrect_answers: ["Tom Jones", "John Barry", "Sheena Easton"],
      },
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "medium",
        question:
          "In the movie &quot;Back to the Future,&quot; what speed does Doc Brown&#039;s DeLorean need to reach in order to travel through time?",
        correct_answer: "88 mph",
        incorrect_answers: ["77 mph", "100 mph", "70 mph"],
      },
      {
        category: "Entertainment: Film",
        type: "multiple",
        difficulty: "medium",
        question:
          "In the Mad Max franchise, what type of car is the Pursuit Special driven by Max?",
        correct_answer: "Ford Falcon",
        incorrect_answers: [
          "Holden Monaro",
          "Chrysler Valiant Charger",
          "Pontiac Firebird",
        ],
      },
    ],
  },
  status: 200,
};
const sportsQuiz = {
  data: {
    response_code: 0,
    results: [
      {
        category: "Sports",
        type: "multiple",
        difficulty: "hard",
        question:
          "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
        correct_answer: "Nine",
        incorrect_answers: ["Ten", "Seven", "Eight"],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "hard",
        question:
          "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
        correct_answer: "Hammer",
        incorrect_answers: ["Wrench", "Drill", "Screwdriver"],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "hard",
        question:
          "Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
        correct_answer: "Pelle",
        incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "hard",
        question:
          "What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?",
        correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
        incorrect_answers: [
          "Cristiano Ronaldo los Santos Diego",
          "Cristiano Armando Diego Ronaldo",
          "Cristiano Luis Armando Ronaldo",
        ],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "hard",
        question: "Which year was the third Super Bowl held?",
        correct_answer: "1969",
        incorrect_answers: ["1968", "1971", "1970"],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "hard",
        question: "What is &ldquo;The Sport of Kings&rdquo;?",
        correct_answer: "Horse Racing",
        incorrect_answers: ["Chess", "Jousting", "Fencing"],
      },
    ],
  },
  status: 200,
};

describe("Gadget API service", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue(gadgetQuiz);
  });
  test("test for endpoint", async () => {
    await getQuiz1DataUtil();
    expect(mockedAxios.get).toBeCalledWith(
      "https://opentdb.com/api.php?amount=6&category=30&difficulty=medium&type=multiple"
    );
  });
  test(" GADGET  QUIZ  ", async () => {
    const getData = await getQuiz1DataUtil();
    expect(getData).toBe(gadgetQuiz);
    expect(getData.status).toBe(200);
  });
});
describe("Film API service", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue(filmQuiz);
  });
  test("test for endpoint", async () => {
    await getFilmQuizDataUtil();
    expect(mockedAxios.get).toBeCalledWith(
      "https://opentdb.com/api.php?amount=6&category=11&difficulty=medium&type=multiple"
    );
  });
  test("FILM QUIZ API CALL", async () => {
    const getData = await getFilmQuizDataUtil();
    expect(getData).toBe(filmQuiz);
    expect(getData.status).toBe(200);
  });
});
describe("Sports API service", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue(sportsQuiz);
  });
  test("test for endpoint", async () => {
    await getSportsQuizDataUtil();
    expect(mockedAxios.get).toBeCalledWith(
      "https://opentdb.com/api.php?amount=6&category=21&difficulty=hard&type=multiple"
    );
  });
  test("SPOrTS QUIZ API CALL", async () => {
    const getData = await getSportsQuizDataUtil();
    expect(getData).toBe(sportsQuiz);
    expect(getData.status).toBe(200);
  });
});
export {};
