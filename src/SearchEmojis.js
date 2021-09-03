import React, { useState } from 'react';
import copy from 'copy-text-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import { getOptions } from './toastOptions';
import emoji from 'node-emoji';

const SearchEmojis = () => {
  const [query, setQuery] = useState('');
  const results = emoji.search(query);
  const onKeyUp = (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);
  }
  const onHandleClick = (emoji) => {
	  copy(emoji);
    toast('copied to clipboard', getOptions(emoji));
  }
 
  return (
    <>
      <main className="wrapper">
        <h3>Emoji finder <span role="img" aria-label="search emoji">🔎</span></h3>
        <input type="search" onKeyUp={onKeyUp} className="search-input" placeholder="Search for emojis..." />
        {query.length && results.length ? 
          (<ul className="search-results">
            {results.map(item => {
              const emojiName = item.key.replace(/_/g, ' ');
              return <li key={item.key} onClick={() => onHandleClick(item.emoji)}>{emojiName}: <span role="img" aria-label={emojiName}>{item.emoji}</span></li>
            })}
          </ul>) : ''
        }
      </main>
      <Toaster />
    </>
  )
}

export default SearchEmojis;