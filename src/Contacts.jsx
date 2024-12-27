import './contacts.css';
function Contacts() {
    return (
        <>
            <div id="contact">
                <div className="person">
                    <img src="/src/assets/n.jpeg" alt="Niranjan S S" />
                    <div className="details">
                        <h2>Niranjan S S</h2>
                        <p>CEO</p>
                        <p>Phone:9496322647</p>
                        <p>Email: <a href="mailto:niranjanss010@gmail.com">niranjanss010@gmail.com</a></p>
                    </div>
                </div>
                <div className="person">
                    <img src="/src/assets/m.jpeg" alt="Muzakeer A H" />
                    <div className="details">
                        <h2>Muzakeer A H</h2>
                        <p>CEO</p>
                        <p>Phone:9945646990</p>
                        <p>Email: <a href="mailto:muzakeerah2006@ gmail.com ">muzakeerah2006@ gmail.com </a></p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contacts;