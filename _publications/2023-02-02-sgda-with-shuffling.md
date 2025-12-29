---
title: "SGDA with Shuffling: Faster Convergence For Nonconvex-PŁ Minimax Optimization"
collection: publications
permalink: /publication/sgda-with-shuffling
date: 2023-02-02
toc: true
toc_sticky: true
authors:
    - me
    - CY
venue: <a href="https://iclr.cc/Conferences/2023"><b>ICLR 2023</b></a>
award: <b>NAVER Outstanding Theory Paper Award</b> at the 7th Joint Conference of Korea Artificial Intelligence Association (<a href="https://aiassociation.kr/Conference/ConferenceView.asp?AC=0&CODE=CC20221001&CpPage=167#CONF">JKAIA 2022</a>)
paperurl: https://openreview.net/forum?id=6xXtM8bFFJ
arxiv: https://arxiv.org/abs/2210.05995
pdf: https://openreview.net/pdf?id=6xXtM8bFFJ
code:
x:
linkedin:
doi: "10.48550/arXiv.2210.05995"
categories: 
    - ICLR
    - KAIA
tags:
    - minimax optimization
    - SGDA
    - without-replacement sampling
    - shuffling-based
---
<!-- markdownlint-disable MD033 -->

## Poster

![sgda_poster](/assets/img/sgda-with-shuffling/poster_iclr_horizontal_90_135.png)

## Abstract

Stochastic gradient descent-ascent (SGDA) is one of the main workhorses for solving finite-sum minimax optimization problems. Most practical implementations of SGDA randomly reshuffle components and sequentially use them (i.e., without-replacement sampling); however, there are few theoretical results on this approach for minimax algorithms, especially outside the easier-to-analyze (strongly-)monotone setups. To narrow this gap, we study the convergence bounds of SGDA with random reshuffling (SGDA-RR) for smooth nonconvex-nonconcave objectives with Polyak-{\L}ojasiewicz (P{\L}) geometry. We analyze both simultaneous and alternating SGDA-RR for nonconvex-P{\L} and primal-P{\L}-P{\L} objectives, and obtain convergence rates faster than with-replacement SGDA. Our rates extend to mini-batch SGDA-RR, recovering known rates for full-batch gradient descent-ascent (GDA). Lastly, we present a comprehensive lower bound for GDA with an arbitrary step-size ratio, which matches the full-batch upper bound for the primal-P{\L}-P{\L} case.

## Keywords

Stochastic gradient descent-ascent(SGDA), without-replacement sampling, Random reshuffling (RR), SGDA-RR, finite-sum optimization, minimax optimization, nonconvex-PŁ, primal-PŁ-PŁ, convergence analysis

## Slides

<iframe src="https://www.slideshare.net/slideshow/embed_code/key/4Cis8oNxKBvoq3" width="960" height="540" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> </div>

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
