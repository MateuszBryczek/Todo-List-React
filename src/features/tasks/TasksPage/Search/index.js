import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import Input from "../../input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input 
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
        />
        </Wrapper>
    );
};