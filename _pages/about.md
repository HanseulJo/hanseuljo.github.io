---
permalink: /
title: "Welcome: Hanseul's Blog 👋"
excerpt: "About me"
author_profile: true
toc: false
toc_sticky: false
redirect_from: 
  - /about/
  - /about.html
---
<!-- markdownlint-disable MD033 -->

<style>
gray { color: gray; font-size: 75%;}
red { color: #DC3522;}
newsdate { color: #502d1c; background-color: #fcfcc2; font-weight: bold;}
.nobull {
  margin:0px; padding:0px;
  list-style: none;
  padding-left: 2rem;
  text-indent: -1.6rem;
}
.nobull2 {
  line-height:1em;
  padding-left: 1rem;
  text-indent: 0rem;
}
.research-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.research-card {
  padding: 1.2rem;
  border-radius: 12px;
  background: #f8f9fa;
}
.research-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #DC3522;
  font-size: 1rem;
}
.research-card p {
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}
.research-card ul {
  padding-left: 1.2rem;
  margin: 0;
}
.research-card li {
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
}
</style>

I am a Ph.D. candidate at [**KAIST AI**](https://gsai.kaist.ac.kr), fortunately advised by [Prof. **Chulhee "Charlie" Yun**](https://chulheeyun.github.io).
Previously, I worked at [Google](https://research.google) NYC as an intern (SR), hosted by [Srinadh Bhojanapalli](https://bsrinadh.github.io).  
Interested in understanding why modern ML algorithms succeed/fail and how to make them more generalizable, adaptable, and theoretically grounded.

<details>
<summary style="text-decoration: underline;">🔬 <b>My Research Intersets</b> 🔭</summary>
  <!-- The text below will be hidden/shown -->
<p>
My primary research interests lie in <b>optimization, machine learning (ML), and deep learning (DL)</b>, especially focusing on both mathematical/theoretical analysis and empirical improvements (usually based on theoretical understanding).
</p>
<p>
During my journey to a Ph.D.👨🏻‍🎓, my ultimate research goal is to <b>rigorously understand and practically overcome</b> the following <b>three critical <red>challenges</red> in ML/DL</b> (see my <a href="/posts/phd-thesis-proposal">Thesis Proposal🔗📰</a> if interested):
</p>
<!-- <ul>
<li> <red><i class="fa fa-sitemap"></i> <b>Generalizability</b></red><br> 
  <b>Generalization capability of modern language models.</b><br>
  <a href="/publication/Position-Coupling">(PositionCoupling)</a> <a href="/publication/Position-Coupling-Scratchpad">(PositionCoupling+Scratchpad)</a> <a href="/publication/coverage-principle">(CoverageFramework_Composition)</a></li>
<li> <red><i class="fa fa-flask"></i> <b>Adaptability</b></red><br>
  <b>Training adaptable models under evolving environments.</b><br>
  <a href="/publication/PLASTIC">(PLASTIC)</a> <a href="/publication/Continual-Linear-Classfication-GD">(GD_for_Continual_Linear_Classifier)</a> <a href="/publication/DASH">(DASH)</a></li>
<li> <red><i class="fa fa-cubes"></i> <b>Multifacetedness</b></red><br>
  <b>Learning with multiple (possibly conflicting) goals.</b><br>
  <a href="/publication/sgda-with-shuffling">(SGDAwithShuffling)</a> <a href="/publication/Alex-GDA">(SimGDA&le;AltGDA&le;AlexGDA)</a> <a href="/publication/fair-streaming-pca">(FairStreamingPCA)</a></li>
</ul> -->
<div class="research-columns">
  <div class="research-card">
    <h3><i class="fas fa-sitemap"></i> Generalizability</h3>
    <p>
      Generalization capability of modern language models (e.g., Transformers).
    </p>
    <details><summary style="text-decoration: underline; font-size: 0.8rem;">📚 Key Papers</summary>
    <ul>
      <li>
        <a href="/publication/Position-Coupling"><b>Position Coupling</b> for enhancing arithmetic length generalization</a>
      </li>
      <li>
        <a href="/publication/Position-Coupling-Scratchpad"><b>Position Coupling + Scratchpad</b> to further extend the scope of length generalization</a>
      </li>
      <li>
        <a href="/publication/coverage-principle">A formal framework to understand <b>compositional pattern matching</b></a>
      </li>
    </ul>
    </details>
  </div>
  <div class="research-card">
    <h3><i class="fas fa-flask"></i> Adaptability</h3>
    <p>
      Learning algorithms that enable models to adapt efficiently under evolving/expanding data.
    </p>
    <details><summary style="text-decoration: underline; font-size: 0.8rem;">📚 Key Papers</summary>
    <ul>
      <li>
        <a href="/publication/PLASTIC"><b>PLASTIC</b> for maintaining both input & label plasticity</a>
      </li>
      <li>
        <a href="/publication/Continual-Linear-Classfication-GD">Understaning dynamics of GD in <b>Continual Linear Classification</b></a>
      </li>
      <li>
        <a href="/publication/DASH"><b>DASH</b> for maintaining plasticity by selectively forgetting overfitted noises</a>
      </li>
    </ul>
    </details>
  </div>
  <div class="research-card">
    <h3><i class="fas fa-cubes"></i> Multifacetedness</h3>
    <p>
      Optimization algorithms for learning problems with multiple conflicting objectives.
    </p>
    <details><summary style="text-decoration: underline; font-size: 0.8rem;">📚 Key Papers</summary>
    <ul>
      <li>
        <a href="/publication/sgda-with-shuffling">Convergence speeds: SGDA &lt; <b>SGDA with Random Reshuffling</b></a>
      </li>
      <li>
        <a href="/publication/Alex-GDA">Convergence speeds: <b>SimGDA &lt; AltGDA</b> &lt; AlexGDA(👉Ours!)</a>
      </li>
      <li>
        <a href="/publication/fair-streaming-pca"><b>Fair Streaming PCA</b> for memory-efficiently erasing undesirable directions in k-PCA</a>
      </li>
    </ul>
    </details>
  </div>
</div>
</details><p></p>

📋 **Curriculum Vitae (CV)**: [[PDF]](/files/Curriculum_Vitae__Hanseul_Cho.pdf) | [[Overleaf-ReadOnly]](https://www.overleaf.com/read/pmkhfyywpjnt#3ad9b9)  
📧 **Primary E-mail**: jhs4015 at kaist dot ac dot kr  
<!-- 📧 **Googler E-mail**: {firstname}{lastname} at google dot com -->

Please don't hesitate to reach out for questions, discussions, and collaborations! 🤗

## ‼️News‼️  
<!-- Keep news within a year; move older news to 'Past News' -->

<ul class="nobull">
  <li>🗞️ <newsdate>[May '26]</newsdate> Selected as a <a href="https://icml.cc/Conferences/2026/ProgramCommittee#gold:~:text=Hanseul%20Cho">Gold Reviewer</a> (top 25%: 4,439 of 17,749 reviewers) at ICML 2026 (&amp; awarded Free Registration).</li>
  <li>🗞️ <newsdate>[Jan. '26]</newsdate> A <a href="/publication/coverage-principle">paper</a> is accepted to <b>ICLR 2026</b>! We provide a formal framework (and empirically/theoretically validate it) to study the pattern-matching behavior of LLMs on compositional tasks (e.g., multi-hop). See you in Rio de Janeiro, Brazil🇧🇷!</li>
  <li>🗞️ <newsdate>[Jun. '25]</newsdate> My Internship at Google has been extended to 08/22/2025. </li>
  <li>🗞️ <newsdate>[Jun. '25]</newsdate> I was selected as one of the <a href="https://icml.cc/Conferences/2025/ProgramCommittee#top-reviewer:~:text=Hanseul%20Cho">Top Reviewers</a> (top 1.88%: 206 of 10,943 reviewers) at ICML 2025! </li>
</ul><p></p>

<details>
  <summary style="text-decoration: underline;">🕰️ Past News 🕰️</summary>
  <!-- The text below will be hidden/shown -->
  <ul class="nobull">
    <li>🗞️ <newsdate>[May '25]</newsdate> I visit NYC🇺🇸 from 2025-05-02 to 2025-08-23 (see the item below). Let's grab a coffee and have a chat if you are in NYC! </li>
    <li>🗞️ <newsdate>[Feb. '25]</newsdate> I'll work as an  <b>Intern (Student Researcher)</b> at <b>Google</b> in New York City🇺🇸! (05/05/2025&ndash;07/25/2025, Host: <a href="https://bsrinadh.github.io">Srinadh Bhojanapalli</a>)  </li>
    <li>🗞️ <newsdate>[Jan. '25]</newsdate> Invited as a reviewer of  <a href="https://jmlr.org/tmlr/index.html">Transactions on Machine Learning Research (TMLR)</a>.</li>
    <li>🗞️ <newsdate>[Jan. '25]</newsdate> Two papers got accepted to <b>ICLR 2025</b>! <a href="/publication/Position-Coupling-Scratchpad">One</a> is the sequel of our <a href="/publication/Position-Coupling">Position Coupling</a> paper; <a href="/publication/Continual-Linear-Classfication-GD">another</a> is about a theoretical analysis of continual learning algorithm. See you in Singapore🇸🇬!</li>
    <li>🗞️ <newsdate>[Nov. '24]</newsdate> An early version of our <a href="/publication/Continual-Linear-Classfication-GD">paper</a> on theoretical analysis of continual learning is accepted to <a href="http://aiassociation.kr">JKAIA 2024</a> and won the <b>Best Paper Award</b> (top 3 papers)!</li>
    <li>🗞️ <newsdate>[Nov. '24]</newsdate> I was selected as one of the <a href="https://neurips.cc/Conferences/2024/ProgramCommittee#top-reviewers:~:text=Hanseul%20Cho">Top Reviewers (top 8.60%: 1,304 of 15,160 reviewers)</a> at NeurIPS 2024! (+ Free registration! 😎) </li>
    <li>🗞️ <newsdate>[Sep. '24]</newsdate> Two papers got accepted to <b>NeurIPS 2024</b>! <a href="/publication/Position-Coupling">One</a> is about length generalization of arithmetic Transfomers, and <a href="/publication/DASH-Direction-Aware-SHrinking">another</a> is about mitigating loss of plasticity in incremental neural net training. See you in Vancouver, Canada🇨🇦!</li>
    <li>🗞️ <newsdate>[Jun. '24]</newsdate> An early version of our <a href="/publication/Position-Coupling">paper</a> on length generalization of Transformers got accepted to the ICML 2024 Workshop on <a href="https://longcontextfm.github.io/">Long-Context Foundation Models</a>!</li>
    <li>🗞️ <newsdate>[May '24]</newsdate> A <a href="/publication/Alex-GDA">paper</a> got accepted to <b>ICML 2024</b> as a <b>spotlight paper</b> (top 3.5% among all submissions)! We show global convergence of Alt-GDA (which is <i>strictly</i> faster than Sim-GDA) and propose an enhanced algorithm called Alex-GDA for minimax optimization. See you in Vienna, Austria🇦🇹!</li>
    <li>🗞️ <newsdate>[Sep. '23]</newsdate> Two papers are accepted to <b>NeurIPS 2023</b>! One is about <a href="/publication/fair-streaming-pca">Fair Streaming PCA</a> and another is about <a href="/publication/PLASTIC">enhancing plasticity in RL</a>. See you in New Orleans, USA🇺🇸!</li>
    <li>🗞️ <newsdate>[Jan. '23]</newsdate> Our <a href="/publication/sgda-with-shuffling">paper</a> about shuffling-based stochastic gradient descent-ascent got accepted to <b>ICLR 2023</b>! </li>
    <li>🗞️ <newsdate>[Nov. '22]</newsdate> An early version of our <a href="/publication/sgda-with-shuffling">paper</a> about shuffling-based stochastic gradient descent-ascent is accepted to 2022 <a href="http://aiassociation.kr">Korea AI Association</a> + <a href="https://www.navercorp.com/en">NAVER</a> Autumnal Joint Conference (JKAIA 2022) and selected as the <b>NAVER Outstanding Theory Paper</b> (top 3 papers)! </li>
    <li>🗞️ <newsdate>[Oct. '22]</newsdate> I am happy to announce that our very first <a href="https://arxiv.org/abs/2210.05995">preprint</a> is now on arXiv!  It is about convergence analysis of shuffling-based stochastic gradient descent-ascent. </li>
    <li>🗞️ <newsdate>[Feb. '22]</newsdate> Now I am part of <a href="https://chulheeyun.github.io">OptiML Lab</a> of KAIST AI. </li>
  </ul>
</details>

<!-- ## Education

<ul class="nobull">
  <li>🏫 Ph.D. in Artificial Intelligence  <gray>KAIST, Sept. 2023 – Current</gray></li>
  <li>🏫 M.Sc. in Artificial Intelligence  <gray>KAIST, Mar. 2022 – Aug. 2023</gray></li>
  <li>🏫 B.Sc. in Mathematical Sciences  <gray>KAIST, Mar. 2017 – Feb. 2022</gray></li>
    <ul class="nobull2" style="color:gray">
    <li>Minor in Computing Sciences / <b>Summa Cum Laude</b></li>
    </ul>
</ul> -->

## 👀

{% assign URL = site.url | remove_first: 'http://' | remove_first: 'https://' %}
{% if URL %}
  <a href="https://hits.sh/{{ URL }}/">
    <img
      alt="Hits"
      style="border: 0px; margin: 0px; width: 30%"
      src="https://hits.sh/{{ URL }}.svg?view=today-total&style=plastic&label=Views&color=407348&labelColor=0D0D0D"
    />
  </a>
{% endif %}
