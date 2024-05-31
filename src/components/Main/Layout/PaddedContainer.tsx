const PaddedContainer = (props) => {
    return(
        <div className="px-16 flex flex-col gap-5 py-4">
            {props.children}
        </div>
    )
}

export default PaddedContainer