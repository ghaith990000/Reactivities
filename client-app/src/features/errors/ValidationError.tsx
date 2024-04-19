import { Message } from "semantic-ui-react";

interface Props {
    errors: string[];
}

const ValidationErrors = ({errors}: Props) => {
  return (
    <Message negative>
        {errors && (
            <Message.List>
                {errors.map((error: string, i) => (
                    <Message.Item key={i}>{error}</Message.Item>
                ))}
            </Message.List>
        )}
    </Message>
  )
}

export default ValidationErrors