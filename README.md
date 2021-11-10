# CPNT262-a5
**Deployed REST API**

- Class: Web Dev Fall 2021
- Author: [Icah Vega](https://github.com/Icahpv)
- Instructor: [Tony Grimes](https://github.com/acidtone)
- Link: [Github Repo Link](https://github.com/Icahpv/cpnt262-a5.git) | [Heroku Link](https://inspire-cpnt262-a5.herokuapp.com/)

## About the assignment

:bangbang:**IMPORTANT INSTRUCTIONS**:bangbang:
- :small_blue_diamond: **Refresh & wait for server to load, Heroku can be sleepy.**
- :small_blue_diamond: Home Page:`https://inspire-cpnt262-a5.herokuapp.com`
- :small_blue_diamond: To view quotes: `https://inspire-cpnt262-a5.herokuapp.com` + `api/quotes`
- :small_blue_diamond: To choose one image: `https://inspire-cpnt262-a5.herokuapp.com` + `api/quotes` + numbers(1-14)
- :small_blue_diamond: To see 404 error: `https://inspire-cpnt262-a5.herokuapp.com` + `/a`

---

1. [x] Server setup
  - [x] Project directory structure:
  - [x] server.js
    - [x] express (see [package.json](package.json))
    - [x] mongoose (see [package.json](package.json))
    - [x] dotenv (see [package.json](package.json))
    - [x] local module containing your routes
  - [x] App connects to MongoDB Atlas (see [api.js](api.js) line 7:34)
  - [x] App deployed to Heroku and MongoDB Atlas. (see Heroku Link above)
2. [x] List and item endpoints
  - [x] Routes are loaded as a local module using require
  - [x] Data is served from MongoDB using a mongoose model
  - [x] Error handling is implemented
3. [x] Mongoose Model
  - [x] Migrate your frontend Javascript array to a mongoose model
  - [] Model is loaded using require 
    > I'm not sure if I understood this instruction correctly.
  - [x] Include a ./model/seeds directory containing the data you've imported into MongoDB Atlas.
4. [x] Public documentation and custom 404 page
  - [x] Custom 404 html page 
  - [x] Serve static assets from a public directory using express.static() middleware (see [server.js](server.js) line 11)
5. [x] Documentation &  Code Quality
  - [x] Include a README.md
  - [] File/directory names, commenting and indentation
    > I tried.

### Problems

1. Cannot import data from MongoDB: I had help from [Fesal](https://github.com/FesalBadday) regarding this matter, he pointed out that I should try using `async & await` and also use `quote.find()` to call my data in Atlas.
2. I also encountered a problem with connecting my [api.js](api.js) to [server.js](server.js) which I had help from [Fesal](https://github.com/FesalBadday) and [Jessica](https://github.com/Enyorose).
3. [Jessica ](https://github.com/Enyorose) also helped me with using this `res.redirect('404.html')` over `res.sendFile(__dirName + './public/404.html')`.
4. I also had a problem with navigating my id which I had help from [Chris](https://github.com/13retonnian), he explained to me that `req.params.id` is returning a string, so I would have to use `Number()` in order for it to return a number. I ended up not using this because I decided to use `async & await` instead. I'm still grateful for that and will remember it more now in the future.
5. Odd situation in Heroku App, it takes a while for my app to run, probably a couple refresh and I was told that this is because of the free account and it goes to sleep.


### Assets

1. [Photo](https://www.pexels.com/photo/all-we-have-is-now-neon-signage-on-black-surface-1580625/) by [Daria Shevtsova](https://www.pexels.com/@daria) from [Pexels](https://www.pexels.com/)
2. [Photo](https://www.pexels.com/photo/close-up-shot-of-inspiring-words-on-a-brown-paper-6956352/) by [Eva Elijas](https://www.pexels.com/@eva-elijas) from [Pexels](https://www.pexels.com/)
3. [Photo](https://www.pexels.com/photo/don-t-quit-message-5238670/) by [Olya Kobruseva](https://www.pexels.com/@olyakobruseva) from [Pexels](https://www.pexels.com/)
4. [Photo](https://www.pexels.com/photo/handwritten-sign-texture-writing-6185624/) by [Polina Kovaleva](https://www.pexels.com/@polina-kovaleva) from [Pexels](https://www.pexels.com/)
5. [Photo](https://www.pexels.com/photo/person-holding-a-sticky-note-1485548/) by [Lisa](https://www.pexels.com/@fotios-photos) from [Pexels](https://www.pexels.com/)
6. [Photo](https://www.pexels.com/photo/dirty-industry-pattern-texture-6185361/) by [Polina Kovaleva](https://www.pexels.com/@polina-kovaleva) from [Pexels](https://www.pexels.com/)
7. [Photo](https://www.pexels.com/photo/paper-with-a-quote-3974410/) by [Lisa](https://www.pexels.com/@fotios-photos) from [Pexels](https://www.pexels.com/)
8. [Photo](https://www.pexels.com/photo/text-4753879/) by [cottonbro](https://www.pexels.com/@cottonbro) from [Pexels](https://www.pexels.com/)
9. [Photo](https://www.pexels.com/photo/blue-card-with-inspirational-message-3927440/) by [ready made](https://www.pexels.com/@readymade) from [Pexels](https://www.pexels.com/)
10. [Photo](https://unsplash.com/photos/z1d-LP8sjuI) by [Hello I'm Nik](https://unsplash.com/@helloimnik) on [Unsplash](https://unsplash.com/)
11. [Photo](https://unsplash.com/photos/utYSgMOIm5w) by [capnsnap](https://unsplash.com/@capnsnap) on [Unsplash](https://unsplash.com/)
12. [Photo](https://unsplash.com/photos/M5OpeuHep1E) by [Duane Mendes](https://unsplash.com/@duanemendes) on [Unsplash](https://unsplash.com/)
13. [Photo](https://unsplash.com/photos/5d5DSRQ5dUc) by [Eileen Pan](https://unsplash.com/@eileenp) on [Unsplash](https://unsplash.com/)
14. [Photo](https://unsplash.com/photos/QFKMeRCHb8w) by [Kelli McClintock](https://unsplash.com/@kelli_mcclintock) on [Unsplash](https://unsplash.com/)
15. [404 Illustration](https://undraw.co/illustrations) by [unDraw](https://undraw.co)
16. [Github Icon](https://icons8.com/icons/set/github) from [Icons8](https://icons8.com)

### Attributions

- :star: [Jessica Watson](https://github.com/Enyorose) - Connecting my 404.html.
- :star2: [Fesal Badday](https://github.com/FesalBadday) - Defining routes, async & await, connecting my data to mongoose.
- :star: [Chris Barber](https://github.com/13retonnian) - Help with item route, `Number(req.params.id) === Number(item.id)`.
- :sparkles: [Tony Grimes (Instructor)](https://github.com/acidtone) - Most of the codes and guidance.

#### License
[MIT License](License) :scroll: