let imgUrl = 'data:image/png;base64,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'
module.exports = imgUrl