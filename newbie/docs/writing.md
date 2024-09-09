# Writing Research Papers

By Risto Miikkulainen

## Content

It is easy to make the mistake that what is obvious to you (the author) is obvious to everyone. It is also easy to just describe what you did, but neglect to say why. You'd be amazed how many papers get rejected just because of that, even if the research is otherwise perfectly good. Writing a paper is actually surprisingly simple. There is a small set of questions you need to address; if you do that, the readers will get what they want. Like this:

* What is the big issue to which you want to contribute? e.g. to understand how human episodic memory is put together.
* What is already known about it? i.e. the state of the art, or related work.
* What is not known about it? There may be several such topics; your topic will be one of them.
* Where did you get your idea? i.e. what motivates it, why do you think it will work? e.g. there's this recent new technique in another area...
* What is your hypothesis?
e.g. that this new technique can be used to solve this old problem.
* How did you test your hypothesis?
E.g. build a computational model and match with human data?
* How did the results turn out?
e.g. they showed that the idea works, and in addition you got one or two other results that go beyond it and generate future work.
* What do they mean?
i.e. what do we know now that we didn't know before?
Or: How is the world a better place after you've done this research?
Above all, the above list is a detailed outline of the introduction for your paper. You can follow it pretty much as it is. It also serves as a guideline to the abstract, although you have to be much more brief in the abstract. Finally, it is the list of topics you will discuss in the later sections.

## Organization

A typical outline of the main sections is:

Abstract
1. Introduction
2. Background/Related Work/Research Base
3. Approach/Model/Architecture
4. Experiments (Setup, Results)
5. Discussion and Future Work
6. Conclusion
7. Acknowledgements (grants)
8. References

The abstract is intended to be a short summary of the paper that a person can read and understand without reading the whole paper. It should follow the same structure as the intro (see the first list above). Do not forget to say how the results turned out and what they mean. Be specific and give content, not just a list of the main sections.
Each of sections 2-5 should do the following:

* Say what you are going to say in this section, i.e. which of the above questions it will answer. Use lists: "There are three main theories of X: (1)...(2)...(3). I will review each one it turn, and point out what their successes and shortcomings are." (In LaTeX, the paralist package can typeset and keep track of such lists.)
* Then discuss each of the topics. Make it clear where you are. "The second main theory of X is Y..."
* Conclude: What did you establish in this section? What does it mean? "Although these theories are good at explaining X, they have not shown how Y..."

In Discussion you evaluate what has been established by doing the research, what the limitations are, what the contributions are, and how your work advances the state of the art. The limitations lead naturally to future work (which is sometimes part of Discussion, sometimes a separate section, depending on the emphasis of the paper). Do not be shy or protective of your ideas: if someone else goes and does what you proposed, all the better for you.

Conclusion should really conclude, i.e. you should step back and evaluate the main results in the context of the big picture: what your results were, how they contribute to the big issue, and what can be done in the future building on this work. It is not a summary.

You should also use subsections; that way it is easier for the reader to put it all together. Each subsection should cover one coherent topic, typically about a 1/3-1/2 page in length (in a double column format). If you have subsections, you should also have an intro paragraph in the main section saying what they are.

## The process of writing

Writing papers is a bit of work, but you get better with practice. There are two principles that allow you to write the paper with the least amount of effort and iteration: the "iterative deepening" principle, and the "outward expansion" principle:

In "iterative deepening", you'll start by putting together a high-level outline consisting of the above main sections. Then put in each of the above main questions: they should be your outline for the abstract and intro, and each question should also be included in the outline for the main text. Then start expanding the outline, gradually adding more and more detail (using the "outward expansion" principle below). Once you have a note for each paragraph, you can start writing out the paper in actual words.

In "outward expansion", you start the writing from the middle of the paper and expand towards the beginning and the end. That is, you first write the description of the architecture/model/approach, experiments, and results. Those are easy to write because they are very concrete. After that, write the background/related work/research base, once you know what is relevant. Then go on to discussion and future work, and then to the intro and the conclusion, once you know what the paper is all about. The last thing to write is the abstract, after you are done with everything else. As you write, you may come up with ideas to be included in the other sections, and you should add them to the outline, to be expanded later.

Typically, you should utilize both principles: you'll start with a complete high-level outline, and in every iteration, you'll deepen it by expanding out from the middle. When you first write it out with actual words, don't worry too much about expressing everything in perfect form: it is more important to just get the ideas on paper. After the whole paper is done, you'll read and edit it a few times and polish it up.

Polishing up the expression is important. Above all, write plain English; the reviewers have to read 10 papers in 2 hours (or something like that), and they are not going to be impressed by long, complicated sentences; they will simply not read them. Use strong verbs, and avoid complex noun groups.

Use a lot of figures and tables to illustrate your ideas. Explain the main points of each figure/table in the text, and the details (that are necessary to actually understand the figure) in the caption. Also repeat the main point of the figure in the caption. It should be possible to just look at the figures and get an idea what the paper is about.

Each of the main ideas that is not your own should be referenced, sometimes with a couple of references. It serves to show that you know the area, and also that your own ideas are based on existing, well-known work, which makes them more believable. Clearly indicate in the paper, however, which of the ideas are yours.

## Further Reading
There are several good books on writing style and how to put together scholarly articles. Try for example Strunk and White: "The Elements of Style", or van Leunen: "A Handbook for Scholars". I have both of these and although they are rather old, they still have lots of useful tips. You can find several newer ones in the library. Also check out the suggestions on the Gracs graduating page, and the Yale Med library page. Bill Starbuck's collection of writing tips is also very useful, as is Mark Leone's collection of advice on research and writing. Jim has also put together a collection of tips gleaned from grading the CS technical writing course, which may be helpful.

Back to UTCS Neural Networks User's Guide
Back to UTCS Neural Networks home pageristo@cs.utexas.eduLast update: $Revision: 1.5 $ $Date: 2002/02/13 07:31:56 $ $Author: jbednar $
