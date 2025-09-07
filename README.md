# Bionical Health Landing Page

A task to build a responsive medical landing page consisting of various types of information, from static text and images to reusable blog cards.

## Usage

1. Clone this repo - `git clone https://github.com/Jim-Dillon/bionical-health.git`
2. Install dependencies - `npm ci`
3. Build CSS - `npm run build`
4. Right click index.html and open with live server

## New experiences

This was the first time I worked with Tailwind in a project as I'd previously used regular CSS or SCSS. I've tried to use it as much as possible, but there were some instances with lots of repeated components, like the blog cards, where I didn't want to repeat large chunks of inline styles, so I created some traditional CSS rulesets to keep the markup a bit cleaner. I hope that with more exposure to Tailwind that I could optimise the code even further.

This was also the first time I've built anything from XD, as I'd only used Figma and Sketch up to this point.

## Things I might do diffferently

As the brief called for HTML and CSS I wanted to try and replicate the page following these guidelines. There were some components that were reused across the page, so if I were to build this from scratch I think I would use a component-friendly framework like React. You could also build and store any components in Storybook.
