---
title: "The Coverage Principle: A Framework for Understanding Compositional Generalization"
collection: publications
permalink: /publication/coverage-principle
date: 2025-05-26
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
venue: Under Review
award: 
paperurl: 
arxiv: https://arxiv.org/abs/2505.20278
pdf: https://arxiv.org/pdf/2505.20278
code:
categories: 
    - arXiv
tags:
    - compositional generalization
    - coverage principle
---
<!-- markdownlint-disable MD033 -->

## Abstract

Large language models excel at pattern matching, yet often fall short in systematic compositional generalization. We propose the coverage principle: a data-centric framework showing that models relying primarily on pattern matching for compositional tasks cannot reliably generalize beyond substituting fragments that yield identical results when used in the same contexts. We demonstrate that this framework has a strong predictive power for the generalization capabilities of Transformers. First, we derive and empirically confirm that the training data required for two-hop generalization grows at least quadratically with the token set size, and the training data efficiency does not improve with 20x parameter scaling. Second, for compositional tasks with path ambiguity where one variable affects the output through multiple computational paths, we show that Transformers learn context-dependent state representations that undermine both performance and interoperability. Third, Chain-of-Thought supervision improves training data efficiency for multi-hop tasks but still struggles with path ambiguity. Finally, we outline a \emph{mechanism-based} taxonomy that distinguishes three ways neural networks can generalize: structure-based (bounded by coverage), property-based (leveraging algebraic invariances), and shared-operator (through function reuse). This conceptual lens contextualizes our results and highlights where new architectural ideas are needed to achieve systematic compositionally. Overall, the coverage principle provides a unified lens for understanding compositional reasoning, and underscores the need for fundamental architectural or training innovations to achieve truly systematic compositionality.

## Keywords

TODO

## Read Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
