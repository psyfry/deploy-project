import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {
    initializeArticles
} from './reducers/articleReducer'
import { setErrorMessage } from './reducers/noticeReducer'
import { setUser, signOut } from './reducers/userReducer'
import { getUserList } from './reducers/userListReducer'
import { getWatchlist, toggleWatched } from './reducers/watchlistReducer'

import loginService from './services/login'
import articleService from './services/articleService'
import userService from './services/userService'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Article from './components/Article'
import Users from './components/Users'
import User from './components/User'
import Login from './components/Login'
import Search from './components/Search'
import Watchlist from './components/Watchlist'
import Signup from './components/Signup'
import SearchResults from './components/SearchResults'
import ArticleContainer from './components/ArticleContainer'
import { Dashboard } from '@mui/icons-material'
import ArticleFormModal from './components/ArticleFormModal'
import EditArticleModal from './components/EditArticleModal'
const App = () => {
    const articles = useSelector((state) => state.articles)
    const user = useSelector((state) => state.user)
    const userList = useSelector((state) => state.userList)
    const watchlist = useSelector((state) => state.watchlist)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    //const [ searchResults, setSeachResults ] = useState('')

    const isEdit = useSelector((state) => state.articleDialog.isEdit)
    const prevValues = useSelector((state) => state.articleDialog.prevValues)


    const dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(initializeArticles())
    }, [ dispatch ])

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('articleListUser')
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            dispatch(setUser(user))
            articleService.setToken(user.token)
        }
    }, [ dispatch ])

    useEffect(() => {
        dispatch(getUserList())
    }, [ dispatch ])

    useEffect(() => {
        dispatch(getWatchlist())
    }, [ dispatch ])

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            window.localStorage.setItem('articleListUser', JSON.stringify(user))
            articleService.setToken(user.token)
            dispatch(setUser(user))
            setUsername('')
            setPassword('')
            navigate('/Articles', { replace: true })
            dispatch(setErrorMessage('success', 'Login Successful', 5))
        } catch (exception) {
            dispatch(setErrorMessage('error', 'Error: Invalid Credentials', 5))
        }
    }

    const handleCreateUser = async (newUser) => {
        try {
            await userService.createUser(newUser)
            dispatch(setErrorMessage('success', 'Success! User Created. You can now login', 5))

        } catch (exception) {
            dispatch(setErrorMessage('error', 'Error: Registration failed', 5))
        }
        navigate('/Login', { replace: true })
    }
    const handleSignout = () => {
        dispatch(signOut())
        window.localStorage.removeItem('articleListUser')
        dispatch(setErrorMessage('info', 'Signed out', 5))
        setUsername('')
        setPassword('')
        navigate('/', { replace: true })

    }
    const toggleWatchlist = async (articleId) => {
        try {
            dispatch(toggleWatched(articleId))
        } catch (exception) {
            dispatch(setErrorMessage('error', "Error: Toggle Watchlist Failed", 5))
        }
    }


    return (
        <div className='App'>
            <NavBar user={user} handleSignout={handleSignout} />
            {isEdit ? <EditArticleModal id={prevValues.id} prevTitle={prevValues.title} prevAuthor={prevValues.author} prevDescription={prevValues.description} prevUrl={prevValues.url} prevDoi={prevValues.doi} prevPublisher={prevValues.publisher} prevPubDate={prevValues.pubDate} prevTags={prevValues.tags} /> : <ArticleFormModal />}
            <Routes>
                <Route path='/Articles/:id' element={<Article handleAddWatchlist={toggleWatchlist} />} />
                <Route path='/Articles' element={<ArticleContainer articles={articles} toggleWatchlist={toggleWatchlist} watchlist={watchlist} />} />
                <Route path='/Users/:id' element={<User />} />
                <Route path='/Dashboard' element={<Dashboard articles={articles} user={user} toggleWatchlist={toggleWatchlist} />} />
                <Route path='/Watchlist' element={<Watchlist watchlist={watchlist} user={user} toggleWatchlist={toggleWatchlist} />} />
                <Route path='/Login' element={<Login handleLogin={handleLogin} handleUsername={({ target }) => setUsername(target.value)}
                    handlePassword={({ target }) => setPassword(target.value)}
                    username={username}
                    password={password} />} />
                <Route path='/signup' element={<Signup handleCreateUser={handleCreateUser} />} />

                <Route path='/Users' element={<Users userList={userList} toggleWatchlist={toggleWatchlist} />} />
                <Route path='/Search' element={<Search />} />
                <Route path='/search/:query' element={<SearchResults toggleWatchlist={toggleWatchlist} />} />
                <Route path='/' element={<Home articles={articles} user={user} toggleWatchlist={toggleWatchlist} watchlist={watchlist} />} />
            </Routes>
        </div>
    )
}

export default App
