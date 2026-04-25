import { useState } from 'react'
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState('')

  return (
    <div className="app-wrapper">
      {/* Background blobs for glassmorphism */}
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>

      <div className="app-container">
        <header className="header animate-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="logo">
            <span>🍳</span>
            <h1>Culinary AI</h1>
          </div>
          <div className="header-status">
            <div className="glass-pill">
              <span style={{color: '#4ade80'}}>●</span> ИИ Активен
            </div>
          </div>
        </header>

        <main className="main-content">
          <section className="input-section animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="hero-text">
              <h2>Готовьте вкусно с <br/><span className="highlight">ИИ Шеф-поваром</span></h2>
              <p>Напишите, какие продукты у вас есть, или прикрепите фото содержимого холодильника. Мы подберем идеальный рецепт.</p>
            </div>

            <div className="chat-box glass-panel">
              <textarea 
                className="chat-input" 
                placeholder="У меня есть курица, помидоры, сыр и макароны. Что приготовить?"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              ></textarea>
              
              <div className="chat-actions">
                <div style={{display: 'flex', gap: '8px'}}>
                  <button className="action-btn" title="Прикрепить фото">
                    📷
                  </button>
                  <button className="action-btn" title="Прикрепить видео">
                    🎥
                  </button>
                </div>
                
                <button className="submit-btn">
                  Создать рецепт ✨
                </button>
              </div>
            </div>
          </section>

          <section className="suggestions-section animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h3 className="suggestions-title">Популярные идеи из ваших продуктов</h3>
            <div className="recipe-cards">
              <div className="recipe-card glass-panel">
                <div className="recipe-icon">🍝</div>
                <h3>Паста "Аль Френо"</h3>
                <p>Идеальное сочетание сливочного соуса, сыра и итальянских трав. Готовится за 15 минут.</p>
              </div>
              
              <div className="recipe-card glass-panel">
                <div className="recipe-icon">🥗</div>
                <h3>Фреш-Салат</h3>
                <p>Лёгкий и полезный салат с вашими любимыми овощами и секретной заправкой от ИИ.</p>
              </div>
              
              <div className="recipe-card glass-panel">
                <div className="recipe-icon">🍗</div>
                <h3>Курица в соусе Терияки</h3>
                <p>Классическое блюдо азиатской кухни для сытного ужина.</p>
              </div>
              
              <div className="recipe-card glass-panel">
                <div className="recipe-icon">🧁</div>
                <h3>Быстрые кексы</h3>
                <p>Легкий десерт к чаю из минимального набора продуктов.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
