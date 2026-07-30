import Style from "./practice.module.css";
export function Profile1(){
    let age=19
    return(
        <div>
            <h1 className={Style.heading}>Hello   it's Css module practice</h1>
            <p className={Style["card-conatiner"]}>  Card_container problem solution </p>
            <section className={Style.section}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, voluptas!</section>
            <article className={Style.article}>  class style present but syyle not done in css</article>
<p className={`${Style.common} ${age > 18 ? Style.green : Style.blue}`}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
</p>            <button className={Style.button}> click me</button>
            
        </div>
    )
}
