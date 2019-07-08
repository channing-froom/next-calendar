import SearchItemComponent from "./SearchItemComponent";
import PaperContainerComponent from "../PaperContainer/PaperContainerComponent";
import Slide from '@material-ui/core/Slide';

export default function({notes, transition}) {
    const transitionSpeed = 700;

    return (
        <div>
            {
                notes.map((i, k) => {
                    return (
                        <Slide
                            direction="left"
                            in={transition || false}
                            mountOnEnter
                            unmountOnExit
                            timeout={transitionSpeed}
                            key={k}
                        >
                            <div className="search-list-item--component">
                                <PaperContainerComponent>
                                    <SearchItemComponent date={i.date} note={i.note} />
                                </PaperContainerComponent>
                            </div>
                        </Slide>
                    );
                })
            }

            <style jsx>
            {`
                .search-list-item--component {
                    margin-bottom: 20px;
                }
            `}
            </style>
        </div>
    );
}