import Counter from "./component/counterAssigment/Counter";
import Toggle from "./component/toggleSwitch/Toggle";
import "./App.css";
import Greeting from "./component/greetingForm/Greeting";
import TodoList from "./component/list/TodoList"; // Corrected import to match the file structure
import Colorpicker from "./component/colorPicker/Colorpicker";
import QuizApp from "./component/quizApp/QuizApp";
import Product from "./component/product/Product";
import Calculator from "./component/calculator/Calculator";
import ToDoListTwo from "./component/toDoListTwo/ToDoListTwo";
import CalculatorTwo from "./component/calculatorTwo/CalculatorTwo";
import TodoListApp from "./component/todolistApp/ToDoListApp";
import WeatherApp from "./component/weatherApp/WeatherApp";
import Blog from "./component/blog/Blog";
import QuizAppTwo from "./component/quizAppTwo/QuizAppTwo";
import Cart from "./component/eCommerseCart/Cart";
import NotesApp from "./component/notePad/NotesApp";
import ChatApp from "./component/chatapp/ChatApp";
import ImageGalery from "./component/ImageGalery/ImageGalery";
import ExpenseTracker from "./component/expenseTracker/ExpenseTracker";
import PollingApp from "./component/pollingApp/PollingApp";
import DataFetcher from "./component/datafetcher/DataFetcher";
import AuthApp from "./component/authApp/AuthApp";
function App() {
  return (
    <div className="App">
      <h1>React Assignment</h1>
      <Counter />
      <Toggle />
      <Greeting />
      <TodoList />
      <Colorpicker />
      <QuizApp />
      <Product />
      <Calculator />
      <CalculatorTwo />
      <ToDoListTwo />
      <TodoListApp />
      <WeatherApp />
      <Blog />
      <QuizAppTwo />
      <Cart />
      <NotesApp />
      <ChatApp />
      <ImageGalery />
      <ExpenseTracker />
      <PollingApp />
      <DataFetcher />
      <AuthApp />
    </div>
  );
}

export default App;
