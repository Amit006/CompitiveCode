// Simple game state interface:
// { children: [state], value: number (leaf) }

function minimax(node, depth, maximizingPlayer) {
  if (depth === 0 || !node.children) {
    return node.value;
  }
  if (maximizingPlayer) {
    let maxEval = -Infinity;
    for (let child of node.children) {
      const eval = minimax(child, depth - 1, false);
      maxEval = Math.max(maxEval, eval);
    }
    return maxEval;
  } else {
    let minEval = +Infinity;
    for (let child of node.children) {
      const eval = minimax(child, depth - 1, true);
      minEval = Math.min(minEval, eval);
    }
    return minEval;
  }
}

function alphaBeta(node, depth, alpha, beta, maximizingPlayer) {
  if (depth === 0 || !node.children) {
    return node.value;
  }
  if (maximizingPlayer) {
    let value = -Infinity;
    for (let child of node.children) {
      value = Math.max(value, alphaBeta(child, depth - 1, alpha, beta, false));
      alpha = Math.max(alpha, value);
      if (alpha >= beta) break;  // Beta cut-off
    }
    return value;
  } else {
    let value = +Infinity;
    for (let child of node.children) {
      value = Math.min(value, alphaBeta(child, depth - 1, alpha, beta, true));
      beta = Math.min(beta, value);
      if (beta <= alpha) break;  // Alpha cut-off
    }
    return value;
  }
}

// Usage:
// const bestMoveValue = alphaBeta(rootState, maxDepth, -Infinity, +Infinity, true);