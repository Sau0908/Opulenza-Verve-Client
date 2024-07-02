export default function FormAction({
    handleSubmit,
    type = 'Button',
    action = 'submit',
    text
}) {
    return (
        <>
            {
                type === 'Button' ?
                    <button
                        type={action}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200  mt-10"
                        onSubmit={handleSubmit}
                    >
                        {text}
                    </button>
                    :
                    <></>
            }
        </>
    )
}