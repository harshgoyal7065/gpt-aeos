const Tabs = (props: any) => {
  return (
    <button className="p-3 bg-transparent text-white-primary w-full text-left hover:border hover:border-gray-primary hover:bg-gray-secondary">
        {props.text}
    </button>
  )
}

export default Tabs