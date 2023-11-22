export default function UserProfile({params}: any) {
    return ( 
        <div className = "flex flex-col items-center justify-center min-h-screen py-2" >
            <div className = "flex flex-col items-center justify-center w-half text-center" >
                <h1 className = "text-6xl font-bold" > Profile </h1>
                <hr className = "w-full my-7" />
                <p>This is the profile page for
                    <span className="text-2xl font-bold">
                        &nbsp;{params.username}
                    </span>
                    .
                </p>
            </div>
        </div>
    )
}