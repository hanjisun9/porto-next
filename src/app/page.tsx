import Cover from "@/components/cover";
import Book from "@/components/book";
import Sidebar from "@/components/sidebar";
import 'boxicons/css/boxicons.min.css';

export default function Home() {
  return (
    <>
      <div className="book-container">
        <Sidebar />
      
      <div className="wrapper">
        <Cover />
        <Book />
        </div>
      </div>
    </>
  )
}