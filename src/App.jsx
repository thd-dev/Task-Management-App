import { GrCheckmark, GrCheckbox } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

// https://react-icons.github.io/react-icons/icons/gr/

const PopUp = () => {

}

function App() {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState();
  const [item, setItem] = useState([1, 2, 3]);
  const [popUp, setPopUp] = useState(false);
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');



  const handleCheched = (event) => {
    setChecked(!checked)
    console.log(event.currentTarget.checked);

  }
  const handleEdit = (event) => {
    event.target.setEdit(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title === '' || des === '') {
      alert('Fill all the field')
      return
    }
    setTitle('')
    setDes('')
    setPopUp(false)
  }
  let handleDelete
  useEffect(() => {
    handleDelete = (event, id) => {
      if (event.currentTarget.parentElement.id == id) {
        item.splice(id, 1);
        console.log(item);
      }
    }
    setItem(item)
  }, [item])

  return (
    <main className="h-full w-full">
      <div className="h-2/5 sm:h-auto bg-slate-950 flex justify-center items-center p-6 sm:p-2 rounded-br-[40%] rounded-bl-[40%]">
        <h2 className="text-white text-3xl sm:text-xl font-bold">Task Management App</h2>
      </div>

      <div className="mx-2 sm:m-8 py-px px-4 sm:py-2 -translate-y-8 sm:translate-y-0">
        <div className="h-10 sm:hidden"></div>

        {
          item.map((item, index) => (
            <div
              className={`flex gap-3 py-1 px-2 items-center rounded-md ${checked ? 'bg-green-100' : 'bg-rose-100'}`}
              key={index}
              id={index}
            >
              <div className="flex items-center" onClick={(event) => handleCheched(event)}>
                <GrCheckbox className={`${!checked ? 'block' : 'hidden'}`} />
                <GrCheckmark className={`${checked ? 'block' : 'hidden'}`} />
              </div>

              <p className={`grow ${checked ? 'line-through' : ''}`}>{item}</p>

              <CiEdit onClick={(event) => handleEdit(event)} />
              <AiTwotoneDelete onClick={(event) => handleDelete(event, index)} />
            </div>
          ))
        }
      </div>

      <div
        className="fixed bottom-4 right-2 text-rose-900 flex justify-center items-center gap-3 bg-rose-50 rounded-2xl backdrop-blur-lg px-5 py-2"
        onClick={() => setPopUp(true)}
      >
        <FaPlus className="text-rose-900" />
        <h4 className="font-bold">Add Todo</h4>
      </div>

      <div className={`h-full w-full absolute top-0 left-0 bg-opacity-30 bg-black  flex items-center justify-center ${popUp ? 'block' : 'hidden'}`}>
        <div className="bg-rose-100 px-8 py-24 sm:py-4">
          <form className="flex flex-col gap-2">
            <div>
              <label htmlFor="title">Title</label> {' '}
              <input type="text" id="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </div>

            <div className="flex items-start gap-2">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description"
                value={des}
                onChange={event => setDes(event.target.value)}
              ></textarea>
            </div>
            <button className="text-rose-900 bg-rose-300 bg-opacity-30 rounded-2xl px-2 py-1 text-lg"
              onClick={handleSubmit}
            >Add</button>
          </form>
        </div>
      </div>

    </main>
  )
}

export default App
