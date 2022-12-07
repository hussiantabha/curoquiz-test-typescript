import axios from "axios";
const getQuiz1DataUtil = async () => {
  return await axios.get(
    "https://opentdb.com/api.php?amount=6&category=30&difficulty=medium&type=multiple"
  );
};

const getFilmQuizDataUtil = async () => {
  return await axios.get(
    "https://opentdb.com/api.php?amount=6&category=11&difficulty=medium&type=multiple"
  );
};
const getSportsQuizDataUtil = async () => {
  return await axios.get(
    "https://opentdb.com/api.php?amount=6&category=21&difficulty=hard&type=multiple"
  );
};

export { getQuiz1DataUtil, getFilmQuizDataUtil, getSportsQuizDataUtil };
