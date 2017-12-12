webpackJsonp([0xd11872fcf344f800],{"./node_modules/json-loader/index.js!./.cache/json/lesson-reasonml-timeouts.json":function(s,n){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Persist",lesson:1,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Actor Communication",lesson:3,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:2,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Querying",lesson:4,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/querying"}}}]},postBySlug:{html:'<p>While not strictly a part of the persistent actor, timeouts are frequently used with snapshotting. Actors take up memory, which is still a limited resource. If an actor has not processed messages in a while, it makes sense to shut it down until it is again needed; this frees up memory. Adding a timeout to the user contacts service is similar to snapshotting:</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code><span class="token keyword">let</span> createContactsService <span class="token operator">=</span> <span class="token punctuation">(</span>parent<span class="token punctuation">,</span> userId<span class="token punctuation">)</span> <span class="token operator">=></span>\n  spawnPersistent<span class="token punctuation">(</span>\n    <span class="token operator">~</span>key<span class="token operator">=</span><span class="token string">"contacts"</span> <span class="token operator">+</span><span class="token operator">+</span> userId<span class="token punctuation">,</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span>userId<span class="token punctuation">,</span>\n    <span class="token operator">~</span>shutdownAfter<span class="token operator">=</span><span class="token number">15</span> <span class="token operator">*</span> minutes<span class="token punctuation">,</span>\n    <span class="token operator">~</span>snapshotEvery<span class="token operator">=</span><span class="token number">10</span> <span class="token operator">*</span> messages<span class="token punctuation">,</span>\n    parent<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">(</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>persist<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">/* Same function as before */</span>\n    <span class="token punctuation">}</span>    \n    <span class="token punctuation">{</span>contacts<span class="token punctuation">:</span> <span class="token class-name">ContactIdMap</span><span class="token punctuation">.</span>empty<span class="token punctuation">,</span> seqNumber<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',timeToRead:1,excerpt:"While not strictly a part of the persistent actor, timeouts are frequently used with snapshotting. Actors take up memory, which is still a...",frontmatter:{title:"Timeouts",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"reasonml",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/timeouts"}}},pathContext:{slug:"/timeouts",category:"reasonml"}}}});
//# sourceMappingURL=path---lesson-reasonml-timeouts-67f6195e3ad059b71d00.js.map