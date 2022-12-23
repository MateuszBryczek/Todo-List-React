import { SectionHeader, StyledSection } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <StyledSection>
        <SectionHeader>
            <h2>{title}</h2>
                {extraHeaderContent}
        </SectionHeader>
            <div>
                {body}
            </div>
    </StyledSection>
);

export default Section;