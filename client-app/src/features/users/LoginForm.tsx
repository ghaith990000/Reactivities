import { Form, Formik } from "formik"
import MyTextInput from "../../app/common/form/MyTextInput"
import { Button } from "semantic-ui-react"
import { useStore } from "../../app/stores/store"
import { observer } from "mobx-react-lite"

const LoginForm = () => {
    const {userStore} = useStore();
  return (
    <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => userStore.login(values)}
    >
        {({handleSubmit, isSubmitting})=>(
            <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                <MyTextInput placeholder="Email" name="email" />
                <MyTextInput placeholder="Password" name="password" type='password' />
                <Button positive loading={isSubmitting} content='Login' type='submit' fluid />
            </Form>
        )}
    </Formik>
  )
}

export default observer(LoginForm);