import '../CSS/index.css'
import '../CSS/profile.css'

function TrainerProfile() {
 
    return (
        <div>
            <center>
                <h1>Hello, Trainer</h1>
                <br></br>
                <div className='card1'>
                    <table style={{border: 'none'}}>
                        <tr>
                            <td><h4 className='userProfile'>Name : </h4></td> 
                            <td><h5 className='userProfile'>{localStorage.getItem('trainer_name')}</h5></td>
                        </tr>
                        <tr>
                            <td><h4 className='userProfile'>Email : </h4></td> 
                            <td><h5 className='userProfile'>{localStorage.getItem('trainer_email')}</h5></td>
                        </tr>
                        <tr>
                            <td><h4 className='userProfile'>Contact : </h4></td> 
                            <td><h5 className='userProfile'>{localStorage.getItem('trainer_contact')}</h5></td>
                        </tr>
                        <tr>
                            <td><h4 className='userProfile'>Address : </h4></td> 
                            <td><h5 className='userProfile'>{localStorage.getItem('trainer_address')}</h5></td>
                        </tr>
                    </table>
                </div> 
                
                
            </center>
            
        </div>
    )
}

export default TrainerProfile