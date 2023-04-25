import {GalleryElement} from "../common/GalleryElement";
import {Link} from "react-router-dom";
import {VOCABOLIERI_ROUTE} from "../../routes/Vocabolieri";
import {Person} from "../../rdf/types/Person";
import {useEffect, useState} from "react";
import {vocang} from "../../rdf/prefixes";

export default function Gallery() {
    let [peopleWithImages, setPeopleWithImages] = useState<Person[]>([])

    useEffect(() => {
        Person.all().then(people => {
            setPeopleWithImages(people.filter(p => p.images.length > 0).sort(() => Math.random() - 0.5))
        })
    },[])

    return (
        <section className="wrapper style1 align-center">
            <div className="inner">
                <h2>Vocabolieri</h2>
                <p> I vocabolieri sono... persone ordinarie!</p>
                <div className="actions stacked">
                    <Link className="button" to={`${VOCABOLIERI_ROUTE}`}>Vai alla pagina dei vocabolieri</Link>
                </div>
            </div>
            <div className="gallery style2 medium lightbox onscroll-fade-in">
                {peopleWithImages.map(p =>
                    <GalleryElement
                        key={p.node.RelativeUri(vocang)}
                        imageTitle={p.fullName()}
                        imageHref={`${VOCABOLIERI_ROUTE}/${p.node.RelativeUri(vocang)}`}
                        imageSrc={p.images[0]}
                        imageAlt={p.fullName()}
                        buttonText={"Vai alla pagina"}/>
                )}
            </div>
        </section>
);
}
