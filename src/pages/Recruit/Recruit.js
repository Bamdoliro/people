import "./Recruit.scss";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Recruit() {

    const [person, setPerson] = useState({
        studentNumber: "",
        name: "",
    });

    const changePerson = e => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        });
    };

    const checkPersonIsEmpty = () => {
        return !(person.name.length > 0 && person.studentNumber.length > 0);
    }

    const disableLink = e => {
        if (checkPersonIsEmpty()) {
            e.preventDefault();
        }
    }

    return (
        <section className="recruit">
            <div className="recruit--title">
                <img src="./logo.svg" alt="logo"/>
                <div className="recruit--title-text">
                    Bamdoliro<br/>
                    합격자 조회
                </div>
            </div>
            <div className="recruit--input">
                <input type="text" name="studentNumber" placeholder="학번을 입력하세요" onChange={changePerson}/>
                <input type="text" name="name" placeholder="이름을 입력하세요" onChange={changePerson}/>
            </div>
            <div className={`recruit--next-wrapper ${checkPersonIsEmpty() ? "disable" : ""}`}>
                <div className="recruit--next">
                    <Link
                        to={`/result?name=${person.name}&studentNumber=${person.studentNumber}`}
                        onClick={disableLink}
                    >
                        <span className="recruit--next">&gt;</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
