---
title: "Polylog-Tight Bounds for Step-Size-Based Acceleration of GD under (Strong) Convexity"
collection: publications
permalink: /publication/polylog-tight-lower-bound-GD
date: 2026-11-19
toc: true
toc_sticky: true
authors:
    - me
    - <a href="https://scholar.google.com/citations?user=ZB5ToPwAAAAJ&hl=en">Minchan Jung</a>
    - CY
venue: To be released
award: <b>NAVER Cloud Best Paper Award</b> at 2026 Joint Conference of Korea Artificial Intelligence Association (<a href="https://aiassociation.kr/Conference/ConferenceView.asp?AC=0&CODE=CC20221001&CpPage=167#CONF">JKAIA 2026</a>)
paperurl: 
arxiv:
pdf: 
code: 
x:
linkedin:
doi:
scholar:
categories: 
    - KAIA
tags:
    - Lower Bounds
    - Acceleration
    - Gradient Descent
---
<!-- markdownlint-disable MD033 -->

## Abstract

We study how much a predefined nonnegative step-size schedule can accelerate gradient descent on $L$-smooth, $\mu$-strongly convex functions. For condition number $\kappa=L/\mu\ge 2$ and $\varepsilon \in (0,1/2]$, we prove lower complexity bounds of rate $\Omega(\kappa^{\log_{\rho} 2}(\log\kappa)^{-\gamma_\ast}\log(1/\varepsilon)) \approx \Omega(\kappa^{0.786}(\log\kappa)^{-0.322}\log(1/\varepsilon))$ for relative squared distance to the minimizer in both *non-anytime* and *anytime* settings. Here, $\rho=1+\sqrt2$ is the silver ratio. We also find that the periodic Silver step-size schedule ([Altschuler & Parrilo, 2025](https://link.springer.com/article/10.1007/s10107-024-02164-2)) achieves the *anytime* upper complexity bound $O(\kappa^{\log_{\rho} 2}\log(1/\varepsilon)) \approx O(\kappa^{0.786}\log(1/\varepsilon))$, extending its known bound at completed-block endpoints to every iterate beyond the accuracy threshold. Hence, our lower bounds tightly match the upper bounds up to $\operatorname{polylog}(\kappa)$. We also derive bounds for the function value gap and squared gradient norm. Moreover, for smooth non-strongly convex functions, our lower-bound construction gives (non-)anytime convergence lower bounds that are tight up to ${\rm polylog}(N)$.

<!-- ## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object> -->
