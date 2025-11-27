---
title: "Characterizing Pattern Matching and Its Limits on Compositional Task Structures"
collection: publications
permalink: /publication/coverage-principle
date: 2025-11-26
toc: true
toc_sticky: true
authors:
    - <a href="https://duemoo.github.io/about/">Hoyeon Chang</a>*
    - <a href="https://jinhopark-ai.github.io/">Jinho Park</a>*
    - me
    - <a href="https://soheeyang.github.io/">Sohee Yang</a>
    - <a href="https://miyoungko.github.io/">Miyoung Ko</a>
    - <a href="https://hbin0701.github.io/">Hyeonbin Hwang</a>
    - <a href="https://scholar.google.com/citations?user=d7-TUHkAAAAJ&hl=en&oi=sra">Seungpil Won</a>
    - <a href="https://scholar.google.com/citations?user=8OqV_8sAAAAJ&hl=en&oi=sra">Dohaeng Lee</a>
    - Youbin Ahn
    - <a href="https://seominjoon.github.io/">Minjoon Seo</a>
venue: Arxiv Preprint
award: 
paperurl: 
arxiv: https://arxiv.org/abs/2505.20278
pdf: https://arxiv.org/pdf/2505.20278
code: kaistAI/coverage-principle
categories: 
    - arXiv
tags:
    - compositional generalization
    - coverage
    - pattern matching
    - Poisonization
    - random intersection graph
---
<!-- markdownlint-disable MD033 -->

## Abstract

Despite impressive capabilities, LLMs' successes often rely on pattern-matching behaviors, yet these are also linked to OOD generalization failures in compositional tasks. However, behavioral studies commonly employ task setups that allow multiple generalization sources (e.g., algebraic invariances, structural repetition), obscuring a precise and testable account of how well LLMs perform generalization through pattern matching and their limitations. To address this ambiguity, we first formalize pattern matching as functional equivalence, i.e., identifying pairs of subsequences of inputs that consistently lead to identical results when the rest of the input is held constant. Then, we systematically study how decoder-only Transformer and Mamba behave in controlled tasks with compositional structures that isolate this mechanism. Our formalism yields predictive and quantitative insights: (1) Instance-wise success of pattern matching is well predicted by the number of contexts witnessing the relevant functional equivalence. (2) We prove a tight sample complexity bound of learning a two-hop structure by identifying the exponent of the data scaling law for perfect in-domain generalization. Our empirical results align with the theoretical prediction, under 20x parameter scaling and across architectures. (3) Path ambiguity is a structural barrier: when a variable influences the output via multiple paths, models fail to form unified intermediate state representations, impairing accuracy and interpretability. (4) Chain-of-Thought reduces data requirements yet does not resolve path ambiguity. Hence, we provide a predictive, falsifiable boundary for pattern matching and a foundational diagnostic for disentangling mixed generalization mechanisms.

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
