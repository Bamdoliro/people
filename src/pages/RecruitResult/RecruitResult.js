import "./RecruitResult.scss";
import people from "./people.json";
import {useSearchParams} from "react-router-dom";

export default function RecruitResult() {

    const [param] = useSearchParams();

    const checkPass = () => {
        for (const p of people) {
            if (p.studentNumber === param.get('studentNumber') && p.name === param.get('name')) {
                return p
            }
        }

        return false;
    }

    let pass = checkPass();

    return (
        <section className="recruit-result">
            <img src="./cute-gati.png" alt="logo"/>
            <div className="recruit-result--text">
                <p>{param.get('name')} 님, 밤돌이로 팀에 지원해주셔서 감사합니다.</p>
                {pass ?
                    <div>
                        <p>귀하는 <b>합격</b>입니다.</p>
                        <p>배정받은 포지션은 <b>{pass.position}</b> 입니다.</p>
                        <p>곧 이것저것 안내하겠습니다.</p>
                    </div>
                    :
                    <div>
                        <p>귀하는 <b>불합격</b>입니다.</p>
                        <p>기회가 있다면 다음에 더 좋은 인연으로</p>
                        <p>뵙길 바라겠습니다.</p>
                    </div>
                }
            </div>
        </section>
    )
}
