import { BlogPost, BlogPostInput, Creator } from "../types/types";
import * as saksham from '../creators/skshm'
import * as darsh from '../creators/darsh'
import * as angshu from '../creators/angshu'
import * as tushar from '../creators/tushar'
import * as ari from '../creators/ari'
import * as khushi from '../creators/khushi'
import * as jerkeyray from '../creators/jerkeyray'
import * as priyanshu from '../creators/priyanshu'
import * as yash from '../creators/yash'
import * as hushal from '../creators/huhshal'
import * as vaze from '../creators/vaze'
import * as atharva from '../creators/atharva'

const modules = [saksham, darsh, angshu, tushar, ari, khushi, jerkeyray, priyanshu, yash, hushal, vaze, atharva];

export const ALL_CREATORS: Creator[] = modules.map((m) => m.creator);
export const ALL_POSTS: BlogPost[] = modules.flatMap((m) =>
    m.posts.map((post: BlogPostInput) => ({
        ...post,
        id: btoa(post.url)
    }))
) as BlogPost[];
