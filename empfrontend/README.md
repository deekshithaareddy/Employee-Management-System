# State Management
    sharing state+keeping state sync across app

context-api--small apps
Redux/justand--large apps
    justang is alternate for redux
Both context api and redux/justang internally broadcasts the state 

# Content API
        -create context object
        -Add state to context object
        -set context provider to a parent

-Context with useState hook is a best and simple state managemenr machanism for small applications. But it craetes unneccessary rerendering issues when multiple states it part of a context
-To over come this unneccessary rerenderung issues , create multiple context and make sure each context have a single state
-When the application size is jhuge, then maintainence of multiple contexts will become an issue.For such large applications, advanced state manaement tools like redux or justand can be used